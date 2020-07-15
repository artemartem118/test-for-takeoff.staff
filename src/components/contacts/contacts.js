import React from 'react'

import ContactsItem from './contact-item'
import AddContact from './contact__add'

const Contacts = ( { onSubmit, contactsData, deleteContact } ) => {

    const contacts = contactsData.map(contact => (
        <ContactsItem key={ contact.id } id={ contact.id } name={ contact.name } number={ contact.number }
                      deleteContact={ deleteContact }/>
    ))

    return (
        <div>
            <AddContact onSubmit={ onSubmit }/>
            { contacts }
        </div>
    )
}

export default Contacts
