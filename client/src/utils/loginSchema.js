import * as Yup from 'yup';

const isRequired = "Obligatory field"
export const loginSchema = Yup.object({
    username: Yup.string()
        .required(isRequired),
    password: Yup.string()
        .required(isRequired)
})
