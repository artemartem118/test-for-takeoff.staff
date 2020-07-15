import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const SignForm = ( { onSubmit, btn, statusSignUp } ) => {
    const { register, handleSubmit, errors } = useForm()

    const required = 'Это поля обязательое'

    const [ login, setLogin ] = useState('')
    const [ password, setPassword ] = useState('')

    return (
        <form onSubmit={ handleSubmit(onSubmit) }>
            <div className="form">
                <div className="form__email">
                    <input value={ login } onChange={ ( e ) => setLogin(e.currentTarget.value) } type='text'
                           name='email' placeholder='Логин' ref={ register({ required }) }/>
                    { errors.email && <div>{ errors.email.message }</div> }
                </div>
                <div className="form__password">
                    <input value={ password } onChange={ ( e ) => setPassword(e.currentTarget.value) } type='password'
                           name='password' placeholder='Пароль' ref={ register({ required }) }/>
                    { errors.password && <div>{ errors.password.message }</div> }
                </div>
                <button>{ btn }</button>
                { statusSignUp && <div>{ statusSignUp }</div> }
            </div>
        </form>
    )
}

export default SignForm
