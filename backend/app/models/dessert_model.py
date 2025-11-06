from sqlalchemy import Column, String, Integer, ForeignKey, Float
from sqlalchemy.orm import relationship
from app.core.database import Base

class Dessert(Base):
    __tablename__ = "desserts"
    
    id = Column("id", Integer, primary_key=True, autoincrement=True)
    name = Column("name", String, nullable=False)
    price = Column("price", Float)
    image_url = Column("image_url", String, nullable=False)
    category_id = Column("category_id", Integer, ForeignKey("categories.id"))
    
    category = relationship("Category", back_populates="desserts")
    
    def __init__(self, name, price, image_url, category_id):
        self.name = name
        self.price = price
        self.image_url = image_url
        self.category_id = category_id