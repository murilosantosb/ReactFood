from sqlalchemy import Column, Integer, String
from app.core.database import Base
from sqlalchemy.orm import relationship

class User(Base):
    __tablename__ = "users"
    
    id = Column("id", Integer, primary_key=True, autoincrement=True)
    username = Column("username", String, nullable=False)
    email = Column("email", String, nullable=False)
    
    orders = relationship("Order", back_populates="user")
    # favorites = relationship("Restaurant", back_populates="favorited_by")
    
    def __init__(self, username, email):
        self.username = username
        self.email = email
        # self.favorite_restaurants = favorite_restaurants