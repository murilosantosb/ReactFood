from fastapi import APIRouter

category_router = APIRouter(prefix="/category", tags=["Category"])

@category_router.get("/")
def get_all_categories(categories):
    ...