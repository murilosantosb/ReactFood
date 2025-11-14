from sqlalchemy.orm import Session
from app.models.category_model import Category

def get_categories(db: Session):
    categories = db.query(Category).all()
    base_url = "http://127.0.0.1:8000/"
    
    for cat in categories:
        if cat.image_url:
            cat.image_url = base_url + cat.image_url
    return categories