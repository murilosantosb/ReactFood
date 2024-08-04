import { body } from 'express-validator'

export const categoryValidation = () => {
    return [
        body("name")
            .isString()
            .withMessage("Nome da categoria é obrigatório"),           
    ]
}

