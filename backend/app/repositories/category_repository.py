from sqlalchemy.orm import Session
from models import Category

def get_categories(db: Session, category: Category):
    return db.query(category).all()