from sqlalchemy import Column, Integer, ForeignKey, Float
from sqlalchemy.orm import relationship
from app.core.database import Base

class OrderedItem(Base):
    __tablename__ = "ordered_item"
    
    id = Column("id", Integer, primary_key=True, autoincrement=True)
    order_id = Column("order_id", Integer, ForeignKey("orders.id"))
    dish_id = Column("dish_id", Integer, ForeignKey("dishes.id"))
    drink_id = Column("drink_id", Integer, ForeignKey("drinks.id"), nullable=True)
    quantity = Column("quantity", Integer)
    subtotal = Column("subtotal", Float)
    
    dishes = relationship("Dish", back_populates="items")
    drinks = relationship("Drink", back_populates="items")
    order = relationship("Order", back_populates="items")