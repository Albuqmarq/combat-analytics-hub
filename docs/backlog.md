# Backlog de Desenvolvimento do CombatAnalytics Hub

Este documento define o conjunto completo de issues para implementacao e entrega do projeto CombatAnalytics Hub, estruturado de acordo com as praticas de engenharia de software e arquitetura de microsservicos descritas na documentacao tecnica.

---

## 1. Seguranca

### ISSUE-01: [Security] Padronizacao de variaveis de ambiente e autenticacao inter-servicos via header seguro
- **Descricao:** Implementar autenticacao inter-servicos utilizando o header customizado `X-Internal-API-Key` nos servicos FastAPI (Inference, Gateway e MLOps). Criacao dos arquivos `.env.example` e leitura segura das configuracoes via Pydantic Settings, garantindo isolamento total de segredos de acordo com o principio de Security by Design e o requisito RNF05.
- **Criterios de aceite:**
  - Middleware ou dependency de validacao do header `X-Internal-API-Key` no Inference Service.
  - Rejeicao de requisicoes sem a chave ou com chave invalida retornando status HTTP 403 Forbidden.
  - Classes de configuracao centralizadas herdando de `pydantic_settings.BaseSettings`.
  - Arquivos `.env.example` criados em cada microsservico sem expor segredos reais.
  - Inclusao de testes validando bloqueio de acesso sem o header.
- **Dependencias:** Nenhuma
- **Estimativa de complexidade:** Baixa
- **Labels:** security, backend

---

## 2. Machine Learning

### ISSUE-02: [ML] Aquisicao, exploracao e sanitizacao de dataset historico do UFC
- **Descricao:** Obter e estruturar dataset historico de lutas do UFC (exemplo: Kaggle UFC Fight Data) no formato tabular, realizando limpeza de valores nulos, conversao de unidades (polegadas para cm, libras para kg) e padronizacao de nomenclatura de atletas e categorias. Permite iniciar o desenvolvimento e treino do modelo preditivo de imediato, sem dependencia do scraper em tempo real.
- **Criterios de aceite:**
  - Script de ingestao e limpeza estruturado em `services/mlops/app/pipeline/data_prep.py`.
  - Tratamento de registros com dados faltantes em metricas criticas (SLpM, TD Def, Reach).
  - Geracao de dataset limpo em formato Parquet ou CSV com esquema validado.
  - Dicionario de dados documentando colunas, tipos e unidades de medida.
- **Dependencias:** Nenhuma
- **Estimativa de complexidade:** Media
- **Labels:** ml, data

### ISSUE-03: [ML] Engenharia de features para calculo de diferenciais (deltas) entre atletas
- **Descricao:** Construir modulo de feature engineering para calcular os deltas entre lutador A e lutador B para cada combate: metricas fisicas (altura, envergadura, idade), striking (SLpM, Str. Acc., SApM, Str. Def.) e grappling (TD Avg., TD Acc., TD Def., Sub. Avg.). Tratar a simetria dos dados para evitar que o modelo aprenda vies de posicao (corner vermelho versus corner azul). Atende a especificacao de modelagem da secao 5.1.
- **Criterios de aceite:**
  - Funcao de calculo vetorial dos deltas implementada com Pandas e NumPy.
  - Balanceamento do dataset com duplicacao simetrica invertida para eliminar vies de corner.
  - Tratamento de posturas (Orthodox, Southpaw, Switch) transformadas em features categoricas codificadas.
  - Testes unitarios garantindo corretude matematica dos deltas calculados.
- **Dependencias:** ISSUE-02
- **Estimativa de complexidade:** Media
- **Labels:** ml, data

### ISSUE-04: [ML] Treinamento, calibracao de probabilidades e validacao do modelo XGBoost
- **Descricao:** Treinar e avaliar modelos supervisionados com foco em XGBoost Classifier, comparando com baselines de Regressao Logistica e Random Forest. Otimizar hiperparametros com foco estrito em Log-Loss e calibracao de probabilidades (ROC-AUC e Brier Score), dado que o sistema precisa fornecer probabilidades reais de vitoria (RF04) e nao apenas classificacoes categoricas.
- **Criterios de aceite:**
  - Pipeline de treino com divisao temporal de dados (lutas anteriores treinam lutas posteriores).
  - Metrica ROC-AUC superior a 0.65 e calibracao de probabilidades via CalibratedClassifierCV.
  - Comparacao quantitativa documentada entre XGBoost, Random Forest e Regressao Logistica.
  - Script reprodutivel de treinamento implementado em `services/mlops/app/ml/trainer.py`.
- **Dependencias:** ISSUE-03
- **Estimativa de complexidade:** Alta
- **Labels:** ml

### ISSUE-05: [ML] Camada de explicabilidade (XAI) e serializacao do artefato de producao
- **Descricao:** Integrar camada de Explainable AI utilizando SHAP (TreeExplainer) ou calculo de contribuicao de atributos para extrair os fatores determinantes de cada predicao (RF05). Serializar o pipeline completo (transformadores + modelo calibrado + metadados de explicabilidade) no artefato `model.pkl` via joblib.
- **Criterios de aceite:**
  - Funcao de extracao dos fatores de maior impacto (top 3 a 5 features) para qualquer par de atletas simulado.
  - Serializacao do artefato final em `model.pkl` contendo metadados de versao e data de treino.
  - Benchmark de inferencia isolada garantindo tempo de execucao inferior a 30ms por requisicao.
  - Teste unitario validando formato da saida explicativa compativel com o schema `PredictResponse`.
- **Dependencias:** ISSUE-04
- **Estimativa de complexidade:** Media
- **Labels:** ml

---

## 3. Inference Service

### ISSUE-06: [Inference] Substituicao do mock pelo modelo real e rota de recarregamento dinamico
- **Descricao:** Atualizar o Inference Service para carregar o arquivo binario `model.pkl` na inicializacao da aplicacao. Substituir a logica aproximada em `app/engine/predictor.py` pela execucao do pipeline de inferencia real e geracao de fatores XAI. Adicionar rota interna protegida `POST /reload-model` para permitir atualizacao dinamica do modelo em memoria sem downtime do servico. Atende RF04, RF05 e RNF01.
- **Criterios de aceite:**
  - Carregamento do modelo no ciclo de vida da aplicacao (FastAPI lifespan) com tratamento caso o arquivo nao exista.
  - Endpoint `POST /predict` executando `model.predict_proba()` e retornando probabilidades calibradas.
  - Endpoint `POST /reload-model` protegido por `X-Internal-API-Key` que recarrega o arquivo em memoria de forma thread-safe.
  - Latencia total do `/predict` menor que 50ms (validando RNF01).
  - Testes unitarios cobrindo respostas validas, falha no carregamento e validacao de entrada.
- **Dependencias:** ISSUE-01, ISSUE-05
- **Estimativa de complexidade:** Media
- **Labels:** backend, ml

---

## 4. MLOps Service

### ISSUE-07: [MLOps] Implementacao do Web Scraper para ufcstats.com
- **Descricao:** Desenvolver modulo de scraping em `services/mlops/app/scraper/ufc_scraper.py` utilizando `httpx` assincrono e `BeautifulSoup4`. O modulo deve coletar resultados de eventos recem-finalizados, confrontos detalhados e estatisticas atualizadas dos lutadores no site ufcstats.com, respeitando controle de taxa de requisicoes e prevencao de bloqueios.
- **Criterios de aceite:**
  - Coleta estruturada de eventos, cards, lutas e estatisticas individuais de lutadores.
  - Parser resiliente com conversao de formatos, unidades e tratamento de dados faltantes.
  - Controle de taxa de requisicoes (delay configuravel) para evitar sobrecarga no servidor de origem.
  - Testes unitarios com respostas HTML simuladas garantindo estabilidade dos seletores.
- **Dependencias:** ISSUE-02
- **Estimativa de complexidade:** Alta
- **Labels:** mlops, scraper

### ISSUE-08: [MLOps] Orquestracao de tarefas assincronas com Redis e Worker em background
- **Descricao:** Configurar fila de processamento assincrono utilizando Redis e gerenciador de tarefas em segundo plano (ARQ ou Celery) no servico MLOps. O worker deve orquestrar sequencialmente as etapas de scraping, atualizacao da base de dados, retreinamento do modelo e substituicao do artefato `model.pkl` no volume compartilhado. Ao finalizar, notificar o Inference Service. Atende RNF02 e o fluxo definido na secao 5.3.
- **Criterios de aceite:**
  - Worker implementado em `services/mlops/app/worker.py` operando integrado ao container Redis.
  - Pipeline completo executando como job em background: scraping, tratamento, treino e export do modelo.
  - Requisicao automatica para `POST /reload-model` do Inference Service apos geracao bem-sucedida do artefato.
  - Politica de retentativas com backoff exponencial e registro de erros em log.
- **Dependencias:** ISSUE-06, ISSUE-07
- **Estimativa de complexidade:** Alta
- **Labels:** mlops, backend

### ISSUE-09: [MLOps] API do MLOps Service com gatilho assincrono protegido
- **Descricao:** Desenvolver a API FastAPI do servico MLOps em `services/mlops/app/main.py`. Criar o endpoint administrativo `POST /mlops/retrain` que valida autenticacao interna, dispara o agendamento da tarefa na fila do Redis e responde imediatamente com status HTTP 202 Accepted. Criar rota para consulta do status do processamento. Atende RF07 e US04.
- **Criterios de aceite:**
  - Rota `POST /mlops/retrain` protegida pelo header `X-Internal-API-Key`.
  - Resposta imediata 202 Accepted contendo o `job_id` da tarefa criada.
  - Rota `GET /mlops/jobs/{job_id}` retornando status atual (queued, in_progress, completed, failed).
  - Endpoint `GET /health` reportando integridade da API e conexao com Redis.
- **Dependencias:** ISSUE-01, ISSUE-08
- **Estimativa de complexidade:** Media
- **Labels:** mlops, backend

---

## 5. Gateway Service

### ISSUE-10: [Gateway] Setup do FastAPI com Rate Limiting e CORS restrito
- **Descricao:** Inicializar a aplicacao do Gateway Service em `services/gateway/app/main.py`. Configurar middleware CORS aceitando apenas a origem do frontend e controle de taxa de requisicoes por IP utilizando `slowapi` integrado ao Redis, protegendo a aplicacao contra abusos e ataques de negegacao de servico. Atende RNF05 e diretrizes da secao 6.
- **Criterios de aceite:**
  - Instancia FastAPI com gerenciamento de ciclo de vida e tratamento global de excecoes.
  - CORS configurado estritamente para o dominio do frontend definido em variavel de ambiente.
  - Rate limiting configurado com `slowapi` (exemplo: maximo de 30 requisicoes por minuto na rota de predicao).
  - Retorno padronizado com status HTTP 429 Too Many Requests quando o limite for atingido.
- **Dependencias:** ISSUE-01
- **Estimativa de complexidade:** Media
- **Labels:** backend, gateway, security

### ISSUE-11: [Gateway] Cliente HTTP interno resiliente com timeout e autenticacao
- **Descricao:** Construir cliente HTTP centralizado em `services/gateway/app/services/http_client.py` com `httpx.AsyncClient`. O cliente deve gerenciar pool de conexoes, injetar automaticamente o header `X-Internal-API-Key` nas comunicacoes internas, aplicar timeouts estritos para isolar falhas de microsservicos e traduzir erros de conexao em respostas padronizadas. Atende RNF02 e RNF05.
- **Criterios de aceite:**
  - Cliente singleton gerenciado no lifespan do Gateway.
  - Injecao automatica da chave de API interna em todas as chamadas para servicos dependentes.
  - Configuracao de timeout curto (exemplo: 2.0 segundos para inferencia).
  - Tratamento de falhas convertendo erros de conexao em HTTP 503 e timeouts em HTTP 504.
- **Dependencias:** ISSUE-10
- **Estimativa de complexidade:** Baixa
- **Labels:** backend, gateway

### ISSUE-12: [Gateway] Roteamento de fighters, events e repasse de predicao
- **Descricao:** Implementar os roteadores do Gateway em `services/gateway/app/routers/`: `predict.py` (valida e despacha simulacoes para o Inference Service), `fighters.py` (busca de catalogo e perfis estatisticos) e `events.py` (proximos cards e probabilidades pre-calculadas). Garantir validacao rigorosa de contratos via Pydantic V2. Atende RF01, RF02, RF04, RF06.
- **Criterios de aceite:**
  - Rota `POST /api/v1/predict` encaminhando carga validada ao Inference Service e retornando a predicao com XAI.
  - Rota `GET /api/v1/fighters` com suporte a paginacao e busca por termo/categoria.
  - Rota `GET /api/v1/fighters/{id}` retornando perfil detalhado com metricas fisicas, striking e grappling.
  - Rota `GET /api/v1/events/upcoming` retornando combates com probabilidades armazenadas em cache.
  - Documentacao interativa OpenAPI/Swagger disponivel em `/docs`.
- **Dependencias:** ISSUE-06, ISSUE-11
- **Estimativa de complexidade:** Media
- **Labels:** backend, gateway

---

## 6. Frontend Next.js

### ISSUE-13: [Frontend] Inicializacao do projeto Next.js com App Router, TypeScript strict e Tailwind CSS
- **Descricao:** Configurar a estrutura base da aplicacao web em `frontend/` com Next.js 14+, App Router, TypeScript no modo estrito (`tsconfig.json`), Tailwind CSS e pacote de icones `lucide-react`. Estruturar as pastas em `src/` conforme arquitetura definida na secao 8 da documentacao tecnica. Atende RNF03 e RNF04.
- **Criterios de aceite:**
  - Projeto Next.js configurado e funcional em ambiente local.
  - `tsconfig.json` com `strict: true` e aliases de importacao (`@/*`).
  - Configuracao de Tailwind CSS com tema escuro (Dark Mode) ativado por padrao.
  - Ausencia de erros de compilacao e linter no comando `npm run build`.
- **Dependencias:** Nenhuma
- **Estimativa de complexidade:** Baixa
- **Labels:** frontend

### ISSUE-14: [Frontend] Camada de servicos, contratos TypeScript e Route Handlers (BFF)
- **Descricao:** Declarar contratos e interfaces em `src/types/` (Fighter, Event, Prediction). Implementar Route Handlers em `src/app/api/` que funcionam como Backend For Frontend (BFF), intermediando requisicoes do navegador para o Gateway Service sem expor enderecos internos ou configuracoes sensiveis. Atende RNF03 e RNF05.
- **Criterios de aceite:**
  - Interfaces TypeScript completas para todas as entidades e respostas de API.
  - Route Handlers `src/app/api/predict/route.ts` e `src/app/api/fighters/route.ts` implementados.
  - Validacao de payload na fronteira do BFF antes do envio ao Gateway.
  - Variaveis privadas acessadas exclusivamente no servidor, sem prefixo `NEXT_PUBLIC_`.
- **Dependencias:** ISSUE-12, ISSUE-13
- **Estimativa de complexidade:** Media
- **Labels:** frontend, security

### ISSUE-15: [Frontend] Design System base, layout responsivo e componentes atomicos
- **Descricao:** Construir os componentes estruturais em `src/components/layout/` (Navbar responsiva, Footer, shell da aplicacao) e componentes de interface em `src/components/ui/` (botoes, cards estatisticos, inputs com autocomplete, badges de probabilidade e skeleton loaders). Assegurar responsividade para mobile e desktop. Atende RNF04.
- **Criterios de aceite:**
  - Barra de navegacao com links para Home, Central de Lutadores e Simulador.
  - Componentes reutilizaveis estilizados com Tailwind CSS e suporte a navegacao por teclado.
  - Skeleton loaders para estados de carregamento assincrono.
  - Responsividade validada para visualizacao mobile (375px), tablet (768px) e desktop (1280px).
- **Dependencias:** ISSUE-13
- **Estimativa de complexidade:** Media
- **Labels:** frontend, ui

### ISSUE-16: [Frontend] Dashboard principal com banner do proximo evento e cards de confrontos
- **Descricao:** Desenvolver a pagina inicial em `src/app/page.tsx` contendo banner com contagem regressiva para o proximo card do UFC e lista de confrontos programados. Cada confronto deve exibir os lutadores, divisao de peso, badge com probabilidade percentual calculada pelo modelo de ML e botao de atalho para simulacao detalhada. Atende US01 e RF06.
- **Criterios de aceite:**
  - Banner principal com contagem regressiva em tempo real para o evento.
  - Grade de cards de combates com fotos, nomes e categorias.
  - Badge destacando o percentual de vitoria estimado de cada lutador.
  - Botao "Analise Detalhada" que redireciona para a tela de simulacao com os lutadores pre-selecionados.
- **Dependencias:** ISSUE-14, ISSUE-15
- **Estimativa de complexidade:** Media
- **Labels:** frontend

### ISSUE-17: [Frontend] Central de Lutadores com catalogo, busca instantanea e perfil detalhado
- **Descricao:** Implementar a listagem em `src/app/fighters/page.tsx` e o perfil em `src/app/fighters/[id]/page.tsx`. A central deve oferecer busca com debounce por nome e filtro por divisao de peso. A pagina individual deve exibir dados biometricos, historico recente e paineis estatisticos de striking e grappling. Atende RF01 e RF02.
- **Criterios de aceite:**
  - Campo de busca textual rapida integrado a filtro por categoria de peso.
  - Cards de catalogo com foto, cartel oficial e status do atleta.
  - Pagina individual com secoes dedicadas a metricas fisicas, troca e luta agarrada.
  - Tratamento visual de atleta nao encontrado com rota 404 apropriada.
- **Dependencias:** ISSUE-14, ISSUE-15
- **Estimativa de complexidade:** Media
- **Labels:** frontend

### ISSUE-18: [Frontend] Comparador estatistico em grafico Radar interativo
- **Descricao:** Criar componente de visualizacao em `src/components/charts/fighter-radar.tsx` utilizando biblioteca grafica (Recharts ou Chart.js). O grafico deve sobrepor os poligonos de desempenho de dois lutadores em cinco dimensoes: Volume de Golpes, Defesa de Striking, Volume de Quedas, Defesa de Quedas e Vantagem Fisica. Atende US02 e RF03.
- **Criterios de aceite:**
  - Grafico Radar interativo com sobreposicao visual clara entre os dois atletas.
  - Normalizacao das estatisticas brutas em escala padronizada de 0 a 100.
  - Cores contrastantes e legenda explicativa para cada atleta.
  - Tooltip apresentando o valor bruto e percentual ao posicionar o cursor.
- **Dependencias:** ISSUE-15, ISSUE-17
- **Estimativa de complexidade:** Media
- **Labels:** frontend, data-viz

### ISSUE-19: [Frontend] Arena de Simulacao Face-Off com explicabilidade (XAI) e card de compartilhamento
- **Descricao:** Implementar o simulador em `src/app/predict/page.tsx` permitindo ao usuario selecionar dois atletas para simular o combate. O painel deve exibir barra comparativa de probabilidade de vitoria, termometro de vantagem por area de luta e a lista explicativa dos fatores determinantes gerados pelo modelo (XAI). Incluir opcao de copiar link com os atletas selecionados e gerar card de palpite para redes sociais. Atende US03, RF04, RF05.
- **Criterios de aceite:**
  - Selecao intuitiva dos lutadores A e B via autocomplete com busca.
  - Disparo assincrono para `/api/predict` com indicador visual de processamento.
  - Barra animada com probabilidades percentuais de vitoria.
  - Painel de explicabilidade apresentando os fatores-chave retornados pelo backend.
  - Gerador ou formatador de cartao de palpite para compartilhamento em redes sociais.
- **Dependencias:** ISSUE-14, ISSUE-18
- **Estimativa de complexidade:** Alta
- **Labels:** frontend

---

## 7. DevOps e Infraestrutura

### ISSUE-20: [DevOps] Dockerfiles para Gateway e MLOps e orquestracao completa no docker-compose
- **Descricao:** Criar os arquivos `Dockerfile` e `.dockerignore` para os servicos Gateway e MLOps. Atualizar o `docker-compose.yml` raiz para orquestrar todos os microsservicos (gateway, inference, mlops, worker) e o Redis em rede interna, configurando volume compartilhado para persistencia e sincronizacao do arquivo `model.pkl`.
- **Criterios de aceite:**
  - `Dockerfile` funcional e otimizado para o Gateway Service (porta 8000).
  - `Dockerfile` funcional para a API e o worker do MLOps Service (porta 8002).
  - `docker-compose.yml` orquestrando toda a arquitetura com o comando `docker compose up --build`.
  - Volume compartilhado montado permitindo que o MLOps atualize o modelo e o Inference o recarregue.
  - Configuracao de variaveis de ambiente de conexao inter-servicos via nomes de host Docker.
- **Dependencias:** ISSUE-09, ISSUE-12
- **Estimativa de complexidade:** Alta
- **Labels:** devops, docker

### ISSUE-21: [DevOps] Pipeline de Integracao Continua (CI) com GitHub Actions
- **Descricao:** Criar workflow em `.github/workflows/ci.yml` acionado em Pull Requests e commits na branch `main`. A esteira deve validar formatacao de codigo, checagem de tipos estatica e execucao de testes automatizados em todos os servicos Python e na aplicacao Next.js.
- **Criterios de aceite:**
  - Verificacao de lint e estilizacao (Ruff ou Flake8/Black para Python; ESLint e Prettier para TypeScript).
  - Checagem estatica de tipos com `mypy` nos microsservicos e `tsc` no frontend.
  - Execucao de testes unitarios com `pytest`.
  - Bloqueio de merge caso ocorram falhas em etapas de validacao.
- **Dependencias:** ISSUE-13, ISSUE-20
- **Estimativa de complexidade:** Media
- **Labels:** devops, ci

### ISSUE-22: [DevOps] Preparacao para deploy de producao (Vercel e Render/Railway)
- **Descricao:** Configurar manifestos e instrucoes para publicacao dos servicos: frontend Next.js na plataforma Vercel e servicos de backend (Gateway, Inference, MLOps, Redis) na Render ou Railway. Garantir isolamento de credenciais e integridade das conexoes em producao.
- **Criterios de aceite:**
  - Arquivo `docs/deploy.md` documentando passo a passo a configuracao de variaveis de ambiente e dominios.
  - Arquivo de configuracao de servicos (exemplo: `render.yaml` ou `railway.json`) validado se aplicavel.
  - Verificacao da comunicacao entre Vercel (BFF) e Gateway em ambiente de producao com CORS funcional.
- **Dependencias:** ISSUE-14, ISSUE-20
- **Estimativa de complexidade:** Media
- **Labels:** devops

---

## 8. Qualidade e Observabilidade

### ISSUE-23: [Quality] Suite de testes automatizados unitarios e de integracao
- **Descricao:** Desenvolver cobertura de testes automatizados para toda a solucao: testes unitarios de calculo de deltas, predictor e extracao XAI; testes de integracao das rotas HTTP do Gateway e Inference usando `httpx.AsyncClient`; e testes de componentes essenciais no frontend.
- **Criterios de aceite:**
  - Testes unitarios cobrindo feature engineering e predicao no backend.
  - Testes de integracao no Gateway validando fluxos de sucesso, erros 403, 404 e limite de requisicoes 429.
  - Testes unitarios no frontend para funcoes utilitarias de normalizacao e calculo.
  - Documentacao dos comandos de teste no `README.md`.
- **Dependencias:** ISSUE-12, ISSUE-19
- **Estimativa de complexidade:** Alta
- **Labels:** quality, tests

### ISSUE-24: [Quality] Logging estruturado, correlacao de requisicoes e monitoramento de latencia
- **Descricao:** Padronizar logs em formato estruturado (JSON) em todos os microsservicos Python, propagando identificador de correlacao (`correlation_id`) atraves dos headers HTTP. Incluir middleware de telemetria medindo tempo de execucao para assegurar cumprimento do requisito RNF01 (latencia inferior a 100ms no `/predict`).
- **Criterios de aceite:**
  - Logger estruturado em formato JSON com campos padrao (timestamp, level, service, correlation_id, message).
  - Propagacao do header `X-Correlation-ID` entre Gateway, Inference e MLOps.
  - Injecao do header `X-Response-Time` nas respostas de inferencia.
  - Log de advertencia quando a duracao de qualquer inferencia exceder 100ms.
- **Dependencias:** ISSUE-10, ISSUE-11
- **Estimativa de complexidade:** Media
- **Labels:** quality, observability

---

## 9. Roadmap de Execucao Recomendado

A sequencia de implementacao segue a cadeia de dependencias tecnicas, garantindo que servicos fundamentais existam antes que seus consumidores sejam construidos:

1. **Fase 1: Seguranca Base e Dados Iniciais**
   - ISSUE-01: Padronizacao de variaveis de ambiente e autenticacao inter-servicos
   - ISSUE-02: Aquisicao, exploracao e sanitizacao de dataset historico do UFC
   - ISSUE-13: Inicializacao do projeto Next.js com App Router, TypeScript strict e Tailwind CSS

2. **Fase 2: Modelagem Preditiva e Artefato de ML**
   - ISSUE-03: Engenharia de features para calculo de deltas
   - ISSUE-04: Treinamento, calibracao e validacao do modelo XGBoost
   - ISSUE-05: Camada de explicabilidade (XAI) e serializacao do artefato

3. **Fase 3: Integracao do Modelo e Gateway Base**
   - ISSUE-06: Substituicao do mock pelo modelo real e recarregamento dinamico
   - ISSUE-10: Setup do FastAPI com Rate Limiting e CORS restrito
   - ISSUE-11: Cliente HTTP interno resiliente com timeout e autenticacao

4. **Fase 4: Endpoints do Gateway e BFF do Frontend**
   - ISSUE-12: Roteamento de fighters, events e repasse de predicao
   - ISSUE-14: Camada de servicos, contratos TypeScript e Route Handlers (BFF)
   - ISSUE-15: Design System base, layout responsivo e componentes atomicos

5. **Fase 5: MLOps e Pipeline Assincrono**
   - ISSUE-07: Implementacao do Web Scraper para ufcstats.com
   - ISSUE-08: Orquestracao de tarefas assincronas com Redis e Worker
   - ISSUE-09: API do MLOps Service com gatilho assincrono protegido

6. **Fase 6: Telas e Recursos do Frontend**
   - ISSUE-16: Dashboard principal com banner do proximo evento e cards
   - ISSUE-17: Central de Lutadores com catalogo e busca
   - ISSUE-18: Comparador estatistico em grafico Radar
   - ISSUE-19: Arena de Simulacao Face-Off com XAI e compartilhamento

7. **Fase 7: DevOps e Integracao de Infraestrutura**
   - ISSUE-20: Dockerfiles para Gateway e MLOps e docker-compose completo
   - ISSUE-21: Pipeline de Integracao Continua (CI) com GitHub Actions
   - ISSUE-22: Preparacao para deploy de producao

8. **Fase 8: Qualidade e Confiabilidade**
   - ISSUE-23: Suite de testes automatizados unitarios e de integracao
   - ISSUE-24: Logging estruturado, correlacao e monitoramento de latencia

---

## 10. Resumo Quantitativo por Area

| Area | Quantidade de Issues | Estimativa de Esforco Predominante |
|---|---|---|
| Seguranca (Security) | 1 | Baixa |
| Machine Learning (ML) | 4 | Media a Alta |
| Inference Service (Inference) | 1 | Media |
| MLOps Service (MLOps) | 3 | Media a Alta |
| Gateway Service (Gateway) | 3 | Baixa a Media |
| Frontend Next.js (Frontend) | 7 | Media a Alta |
| DevOps e Infraestrutura (DevOps) | 3 | Media a Alta |
| Qualidade e Observabilidade (Quality) | 2 | Media a Alta |
| **Total** | **24** | **Cobertura de 100% do escopo** |
