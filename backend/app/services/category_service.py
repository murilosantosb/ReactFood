from sqlalchemy.orm import Session
from fastapi import HTTPException
from app.models.category_model import Category
from app.repositories.category_repository import get_categories

def get_all_categories(db: Session):
    categories = get_categories(db)

    if not categories:
        raise HTTPException(status_code=404, detail="As categorias não foram encontradas!")
    
    return categories
