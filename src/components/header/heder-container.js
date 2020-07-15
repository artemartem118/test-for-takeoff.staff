import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'

import { signOutUser } from '../../redux/auth-reducer'
import Header from './header'

const HeaderContainer = ( { signOutUser, email, isAuth, history } ) => {

    const redirect = ( path ) => {
        history.push(path)
    }

    return (
        <Header signOutUser={signOutUser} redirect={ redirect } email={ email } isAuth={ isAuth }/>
    )
}

const MapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    email: state.auth.email
})

export default compose(
    withRouter,
    connect(MapStateToProps, { signOutUser })
)(HeaderContainer)
