from sqlalchemy.orm import Session
from app.models.category_model import Category

def get_categories(db: Session):
    categories = Category
    return db.query(categories).all()