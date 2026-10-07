from sqlalchemy import Column, Integer, String, Float
from app.db.database import Base

class Fighter(Base):
    __tablename__ = "fighters"

    id = Column(String, primary_key=True, index=True) # Usaremos r_fighter_name tratado ou hash
    name = Column(String, index=True, nullable=False)
    category = Column(String, index=True)
    record = Column(String)
    country = Column(String)
    flag = Column(String)
    
    # Atributos fisicos
    age = Column(Integer)
    height_cm = Column(Float)
    reach_cm = Column(Float)
    weight_kg = Column(Float)
    
    # Metricas e estatisticas de ML
    elo = Column(Float, index=True)
    days_inactive = Column(Integer)
    win_rate = Column(Float)
    finish_rate = Column(Float)
    striking_landed = Column(Float)
    takedown_success = Column(Float)
    knockdown_rate = Column(Float)
