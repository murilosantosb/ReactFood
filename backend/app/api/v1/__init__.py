from fastapi import APIRouter
from .category_router import category_router


router = APIRouter()

router.include_router(category_router)