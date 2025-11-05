from sqlalchemy import Column, Integer, String, ForeignKey 
from sqlalchemy.orm import relationship
from app.core.database import Base

class Restaurant(Base):   
    __tablename__ = "restaurants"
    
    id = Column("id", Integer, primary_key=True, autoincrement=True)
    name = Column("name", String, nullable=False)
    description = Column("description", String, nullable=False)
    image_url = Column("image_url", String)
    category_id = Column("category_id", Integer, ForeignKey("categories.id"))
    
    category = relationship("Category", back_populates="restaurant")
    dishes = relationship("Dish", back_populates="restaurant")
    drinks = relationship("Drink", back_populates="restaurant")
    favorited_by = relationship("User", back_populates="restaurant")
    
    
    def __init__(self, name, description, image_url, category_id) :
        self.name = name
        self.description = description
        self.image_url = image_url
        self.category_id = category_id
        
# INSERT INTO restaurant (name, description, image_url, category_id)