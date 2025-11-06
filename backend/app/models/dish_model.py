from sqlalchemy import Column, Integer, String, ForeignKey, Float
from sqlalchemy.orm import relationship
from app.core.database import Base

class Dish(Base):
    __tablename__ = "dishes"
    
    id = Column("id", Integer, primary_key=True, autoincrement=True)
    name = Column("name", String, nullable=False)
    description = Column("description", String, nullable=False)
    price = Column("price", Float, nullable=False)
    image_url = Column("image_url", String)
    category_id = Column("category_id", Integer, ForeignKey("categories.id"))
    
    # restaurant = relationship("Restaurant", back_populates="dishes")
    category = relationship("Category", back_populates="dishes")
    items = relationship("OrderedItem", back_populates="dishes")
    
    
    def __init__(self, name, description, price, image_url, category_id):
        self.name = name
        self.description = description
        self.price = price
        self.image_url = image_url
        self.category_id = category_id