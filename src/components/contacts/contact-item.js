import React from 'react'

import styles from './contacts.module.css'

const ContactsItem = ( { deleteContact, id, name, number } ) => {

    return (
        <div className={ styles.contact } key={ id }>
            <div>
                <div className={ styles.name }><b>Имя: </b>{ name }</div>
                <div className={ styles.number }><b>Телефон: </b>{ number }</div>
            </div>
            <div className={ styles.actions }>
                <button onClick={() => deleteContact(id)}>Удалить</button>
                <button>Редактировать</button>
            </div>
        </div>
    )
}

export default ContactsItem
