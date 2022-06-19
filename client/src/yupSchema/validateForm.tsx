import * as yup from 'yup'
export const registerSchema = yup.object().shape({
    name: yup.string().min(3, 'Seu nome deve conter no mínimo 3 carateres').required('Nome é obrigatório'),
    email: yup.string().email('E-mail inválido').required('E-mail é um campo obrigatório'),
    password: yup.string().min(6, 'A senha deve conter no mínimo 6 carateres').required('Senha é obrigatória'),
})