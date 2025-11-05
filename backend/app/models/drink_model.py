from sqlalchemy import Column, Integer, String, ForeignKey, Float
from sqlalchemy.orm import relationship
from app.core.database import Base

class Drink(Base):
    __tablename__ = "drinks"
    
    id = Column("id", Integer, primary_key=True, autoincrement=True)
    name = Column("name", String, nullable=False)
    price = Column("price", Float, nullable=False)
    image_url = Column("image_url", String, nullable=False)
    category_id = Column("category_id", String, nullable=False)
    
    restaurant = relationship("Restaurant", back_populates="drink")
    category = relationship("Category", back_populates="drink")
    
    def __init__(self, name, price, image_url, restaurant_id):
        self.name = name
        self.price = price
        self.image_url = image_url
        self.restaurant_id = restaurant_id