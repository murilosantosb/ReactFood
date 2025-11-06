from fastapi import APIRouter, Depends
from app.services.category_service import get_all_categories
from fastapi import HTTPException
from sqlalchemy.orm import Session
from app.core.database import get_db

category_router = APIRouter(prefix="/category", tags=["Category"])

@category_router.get("/")
def get_all(db: Session = Depends(get_db)):
    try:
        category_data = get_all_categories(db)
        return category_data
    except HTTPException as e:
        raise e
    except Exception:
        raise HTTPException(status_code=500, detail="Erro interno ao buscar categorias.")