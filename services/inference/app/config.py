from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    """
    Carrega as configuracoes de ambiente usando o Pydantic Settings.
    A variavel INTERNAL_API_KEY deve ser definida no ambiente ou no arquivo .env
    para garantir autenticacao entre os servicos do backend.
    """
    internal_api_key: str

    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8")

settings = Settings()
