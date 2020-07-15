import React from 'react'
import { connect } from 'react-redux'

import { signupUser } from '../../redux/auth-reducer'

import Sign from '../common/sign/sign'

const SignupContainer = ( { isAuth, signupUser, statusSignUp } ) => {
    return (
        <Sign statusSignUp={ statusSignUp } btn={ 'Зарегестрироваться' } signHandler={ signupUser }
              isAuth={ isAuth }/>
    )
}

const MapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    statusSignUp: state.auth.statusSignUp
})

export default connect(MapStateToProps, { signupUser })(SignupContainer)
