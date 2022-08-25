import * as Yup from 'yup';

const isRequired = "Obligatory field"
export const registerSchema = Yup.object({
    username: Yup.string()
        .matches(/^[aA-zZ\s]+$/, "Sólo se permiten letras en este campo")
        .min(4, 'Minimum 4 characters')
        .max(25, 'Maximum 25 characters')
        .required(isRequired),
    email: Yup.string()
        .email('Please enter a valid email')
        .required(isRequired),
    password: Yup.string()
        .min(3, 'Minimum 3 characters')
        .max(10, 'Maximum 10 characters')
        .required(isRequired)
})
