import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import './App.css'

import SigninContainer from './components/signin/signin-container'
import HeaderContainer from './components/header/heder-container'
import ContactsContainer from './components/contacts/contacts-container'
import SignupContainer from './components/signup/signup-container'

function App() {
    return (
        <>
            <HeaderContainer/>
            <div className="wrapper">
                <div className="container">
                    <div className="app-content">
                        <Switch>
                            <Route path='/signin' render={ () => <SigninContainer/> }/>
                            <Route path='/signup' render={ () => <SignupContainer/> }/>
                            <Route path='/contacts' render={ () => <ContactsContainer/> }/>
                            <Redirect form={ '/' } to={ '/contacts' }/>
                        </Switch>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
