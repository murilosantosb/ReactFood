from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from app.core.database import Base

class Category(Base):
    __tablename__ = "categories"
    
    id = Column("id", Integer, primary_key=True, autoincrement=True)
    name = Column("name", String, nullable=False)
    image_url = Column("image_url", String, nullable=False)
    
    restaurants = relationship("Restaurant", back_populates="category")
    dishes = relationship("Dish", back_populates="category")
    drinks = relationship("Drink", back_populates="category")
    desserts = relationship("Dessert", back_populates="category")
    
    