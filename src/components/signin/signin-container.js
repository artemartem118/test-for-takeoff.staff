import React from 'react'
import { connect } from 'react-redux'

import { signinUser } from '../../redux/auth-reducer'

import Sign from '../common/sign/sign'

const SigninContainer = ( { isAuth, signinUser, statusSignUp } ) => {
    return (
        <Sign statusSignUp={ statusSignUp } btn={ 'Войти' } signHandler={ signinUser } isAuth={ isAuth }/>
    )
}

const MapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    statusSignUp: state.auth.statusSignUp
})

export default connect(MapStateToProps, { signinUser })(SigninContainer)
