"""
    1 - configurar modelos                                                [X]
    2 - criar nosso banco de dados                                        [X]
    3 - alembic - migrations                                              [X]
    4 - construir nosso banco de dados                                    [X]
    5 - criar nossas primeiras rotas GETS                                 []
    6 - integrar com frontend apenas os GETS                              []
    7 - fazer a lógica de autenticação de usuário                         []
    8 - construir as demais funcionalidades do backend POST PUT DELETE... []
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from app.api.v1 import router

app = FastAPI(debug=True)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)

app.mount("/uploads", StaticFiles(directory="uploads"), name="uploads")