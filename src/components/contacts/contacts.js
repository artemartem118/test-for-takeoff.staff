import React from 'react'

import ContactsItem from './contact-item'
import AddContact from './contact__add'
import FindContact from './find-contact'

const Contacts = ( { onSubmit, contactsData, deleteContact, putContact, onSubmitEditContact, isDisabled, editModeHandler, findInputHandler } ) => {

    const contacts = contactsData.map(contact => (
        <ContactsItem editModeHandler={ editModeHandler }
                      isDisabled={ isDisabled } onSubmitEditContact={ onSubmitEditContact } key={ contact.id }
                      id={ contact.id }
                      name={ contact.name } number={ contact.number }
                      deleteContact={ deleteContact } putContact={ putContact }/>
    ))

    return (
        <div>
            <AddContact onSubmit={ onSubmit }/>
            <FindContact findInputHandler={ findInputHandler } />
            { contacts }
        </div>
    )
}

export default Contacts
