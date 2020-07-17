import React, { useState } from 'react'

import styles from './contacts.module.css'
import ContactsItemForm from './contact-item__edit'

const ContactsItem = ( { deleteContact, id, name, number, onSubmitEditContact, isDisabled, editModeHandler } ) => {

    const [ editMod, setEditMod ] = useState(false)

    return (
        <div className={ styles.contact } key={ id }>
            {
                editMod ?
                    <ContactsItemForm setEditMod={ setEditMod } id={ id } name={ name } number={ number }
                                      onSubmitEditContact={ onSubmitEditContact }/>
                    : <div>
                        <div><b>Имя: </b>{ name }</div>
                        <div><b>Телефон: </b>{ number }</div>
                    </div>
            }
            {
                editMod ?
                    <button form='formContact'>Применить</button>
                    : <div>
                        <button onClick={ () => deleteContact(id) }>Удалить</button>
                        <button disabled={ isDisabled } onClick={ editModeHandler.bind(null, setEditMod) }>Редактировать</button>
                    </div>
            }

        </div>
    )
}

export default ContactsItem
