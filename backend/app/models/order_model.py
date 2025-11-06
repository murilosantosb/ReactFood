from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, Float
from sqlalchemy.orm import relationship
from app.core.database import Base
from datetime import timezone

class Order(Base):
    __tablename__ = "orders"
    
    id = Column("id", Integer, primary_key=True, autoincrement=True)
    user_id = Column("user_id", Integer, ForeignKey("users.id"))
    date = Column("date", DateTime, default=timezone.utc)
    total = Column("total", Float)
    
    user = relationship("User", back_populates="orders")
    items = relationship("OrderedItem", back_populates="order")
    
    def __init__(self, user_id, date, total):
        self.user_id = user_id
        self.date = date
        self.total = total