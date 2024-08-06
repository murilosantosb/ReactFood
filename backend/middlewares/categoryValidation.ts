import { body } from 'express-validator'

export const categoryValidation = () => {
    return [
        body("name")
            .isString()
            .withMessage("Nome da categoria é obrigatório"),           
    ]
}

export const restaurantValidation = () => {
    return [
        body("name")
            .isString()
            .withMessage("Nome do restaurante é obrigatório"),
        body("description")
            .isString()
            .withMessage("Descrição do restaurante é obrigatório"),
        body("delivery_price")
            .isString()
            .withMessage("Preço de entrega é obrigatório"),
        body("delivery_time")
            .isString()
            .withMessage("Tempo de entrega é obrigatório"),
        body("category")
            .isString()
            .withMessage("Categoria é obrigatório"),                
    ]
}

export const itemValidation = () => {
    return[
        body("name")
            .isString()
            .withMessage("Nome do item é obrigatório"),
        body("price")
            .isNumeric()
            .withMessage("Preço do item é obrigatório"),
        body("category")
            .isString()
            .withMessage("Categoria é obrigatório"),            
    ]
}