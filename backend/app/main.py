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
from app.api.v1 import router

app = FastAPI(debug=True)

app.include_router(router)

