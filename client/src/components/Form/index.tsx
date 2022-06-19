import { useFormik } from 'formik'
import './styles.scss'
import { registerSchema } from '../../yupSchema/validateForm'
import DefaultInput from '../Input'
import DefaultButton from '../Button'
import { useState } from 'react'

export default function DefaultForm() {
    const [showErrors, setShowErrors] = useState(false)
    const { values, errors, handleChange, handleSubmit } = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
        validationSchema: registerSchema,
        onSubmit: (values) => {
            console.log(values)
        }
    })
    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        setShowErrors(true)
        handleSubmit(e)
    }
    return (
        <form className='formStyles' autoComplete='on' onSubmit={handleOnSubmit}>
            <h1>Faça seu cadastro</h1>
            <div className='formInputs'>
                <DefaultInput
                    placeholder='Digite seu nome'
                    type='name'
                    name='name'
                    label='Nome'
                    value={values.name}
                    onChange={handleChange}
                    error={showErrors ? errors.name : ''} />
                <DefaultInput
                    placeholder='Digite seu e-mail'
                    type='email'
                    name='email'
                    label='E-mail'
                    value={values.email}
                    onChange={handleChange}
                    error={showErrors ? errors.email : ''} />
                <DefaultInput
                    placeholder='Digite sua senha'
                    type='password'
                    name='password'
                    autoComplete='off'
                    label='Senha'
                    value={values.password}
                    onChange={handleChange}
                    error={showErrors ? errors.password : ''} />
            </div>
            <DefaultButton type='submit'>Enviar</DefaultButton>
        </form>
    )
}