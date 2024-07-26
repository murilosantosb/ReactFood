import { body } from "express-validator";

export const userCreateValidation = () => {
    return [
    body("name")
        .isString()
        .withMessage("O nome é obrigatório!")
        .isLength({ min: 3 })
        .withMessage("O nome precisa ter no mínimo 3 caracteres!"),
    body("email")
        .isEmail()
        .withMessage("O email é obrigatório!"),
    body("password")
        .isString()
        .withMessage("A senha é obrigatória!")
        .isLength({ min: 6 })
        .withMessage("A senha precisa ter no mínimo 6 caracteres!"),    
    ]
}


export const userLoginValidation = () => {
    return [
        body("email")
            .isEmail()
            .withMessage("O email é obrigatório!"),
        body("password")
            .isString()
            .withMessage("A senha é obrigatória!")
            .isLength({ min: 6 })  
            .withMessage("Por padrão as senhas tem 6 caracteres!"),  
    ]
}