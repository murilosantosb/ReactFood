from sqlalchemy.orm import Session
from models.category_model import Category
from repositories.category_repository import get_categories

def get_all_categories():
    ...