import React from 'react'
import { connect } from 'react-redux'

import { signinUser } from '../../redux/auth-reducer'

import Sign from '../common/sign/sign'

const SigninContainer = ( { isAuth, signinUser } ) => {
    return (
        <Sign btn={ 'Войти' } signHandler={ signinUser } isAuth={ isAuth }/>
    )
}

const MapStateToProps = state => ({
    isAuth: state.auth.isAuth
})

export default connect(MapStateToProps, { signinUser })(SigninContainer)
