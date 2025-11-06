"""Change category_id from String to Integer in drinks

Revision ID: c1d9c03668b9
Revises: e981bd4e49c9
Create Date: 2025-11-05 19:57:26.517358
"""
from typing import Sequence, Union
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'c1d9c03668b9'
down_revision: Union[str, Sequence[str], None] = 'e981bd4e49c9'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Upgrade schema."""
    # 1️⃣ Converte category_id de texto para inteiro usando cast explícito
    op.execute('ALTER TABLE drinks ALTER COLUMN category_id TYPE INTEGER USING category_id::integer')

    # 2️⃣ Cria a chave estrangeira para categories(id)
    op.create_foreign_key(
        constraint_name=None,  # Alembic gera nome automático
        source_table='drinks',
        referent_table='categories',
        local_cols=['category_id'],
        remote_cols=['id']
    )


def downgrade() -> None:
    """Downgrade schema."""
    # Reverte a FK
    op.drop_constraint(None, 'drinks', type_='foreignkey')

    # Converte de volta para texto
    op.execute('ALTER TABLE drinks ALTER COLUMN category_id TYPE VARCHAR USING category_id::text')
