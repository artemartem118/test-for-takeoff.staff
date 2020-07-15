import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import Contacts from './contacts'
import { deleteContact, getContacts, postContact } from '../../redux/contscts-reducer'

const ContactsContainer = ( { isAuth, getContacts, contacts, deleteContact, postContact } ) => {
    useEffect(() => {
        getContacts()
    }, [])

    if ( !isAuth ) {
        return <Redirect to={ '/signup' }/>
    }

     const onSubmit = (data) => {
         data.id = Date.now()
         postContact(data)
    }

    return (
        <Contacts onSubmit={onSubmit} deleteContact={ deleteContact } contactsData={ contacts }/>
    )
}

const MapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    contacts: state.contactsPage.contacts
})

export default connect(MapStateToProps, { getContacts, deleteContact, postContact })(ContactsContainer)
