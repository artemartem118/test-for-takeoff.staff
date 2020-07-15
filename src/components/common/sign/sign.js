import React from 'react'
import { Redirect } from 'react-router-dom'

import SignForm from './sign-form'

const Sign = ( { isAuth, signHandler, btn, statusSignUp } ) => {

    if ( isAuth ) {
        return <Redirect to={ '/contacts' }/>
    }

    const onSubmit = ( { email, password } ) => {
        signHandler({ email, password })
    }

    return (
        <div>
            <SignForm statusSignUp={ statusSignUp } btn={ btn } onSubmit={ onSubmit }/>
        </div>
    )
}

export default Sign
