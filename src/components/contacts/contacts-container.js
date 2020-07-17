import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import Contacts from './contacts'
import {
    deleteContact,
    postContact,
    putContact,
    setFindInputValue,
    setToggleDisabled,
    setVisibleContacts
} from '../../redux/contscts-reducer'

const ContactsContainer = ( { isAuth, setVisibleContacts, setFindInputValue, contacts, deleteContact, postContact, putContact, isDisabled, setToggleDisabled } ) => {
    useEffect(() => {
        setVisibleContacts()
    }, [])

    if ( !isAuth ) {
        return <Redirect to={ '/signup' }/>
    }

    const onSubmit = ( setName, setNumber, data ) => {
        setName('')
        setNumber('')
        data.id = Date.now()
        postContact(data)
    }

    const editModeHandler = ( setEditMod ) => {
        setEditMod(true)
        setToggleDisabled(true)
    }

    const findInputHandler = ( findInputValue ) => {
        setFindInputValue(findInputValue)
    }

    const onSubmitEditContact = ( id, setEditMod, data ) => {
        putContact(id, data)
        setEditMod(false)
        setToggleDisabled(false)
    }

    return (
        <Contacts findInputHandler={ findInputHandler } editModeHandler={ editModeHandler } isDisabled={ isDisabled }
                  onSubmitEditContact={ onSubmitEditContact } putContact={ putContact } onSubmit={ onSubmit }
                  deleteContact={ deleteContact }
                  contactsData={ contacts }/>
    )
}

const MapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    contacts: state.contactsPage.visibleContacts,
    isDisabled: state.contactsPage.isDisabled
})

export default connect(MapStateToProps, {
    setVisibleContacts,
    setFindInputValue,
    deleteContact,
    postContact,
    putContact,
    setToggleDisabled
})(ContactsContainer)
