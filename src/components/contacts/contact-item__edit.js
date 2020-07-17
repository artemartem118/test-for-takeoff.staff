import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import styles from './contacts.module.css'


const ContactsItemForm = ( { onSubmitEditContact, id, name, number, setEditMod } ) => {

    const { register, handleSubmit, errors } = useForm()

    const required = 'Это поля обязательое'

    const [ nameInputValue, setNameInputValue ] = useState(name)
    const [ numberInputValue, setNumberInputValue ] = useState(number)

    return (
        <form onSubmit={ handleSubmit(onSubmitEditContact.bind(null, id, setEditMod)) } id='formContact'>
            <div className={styles.editInput}><b>Имя: </b>
                <input ref={ register({ required }) } value={ nameInputValue }
                       onChange={ ( e ) => setNameInputValue(e.currentTarget.value) } name='name' placeholder='Имя'
                       type="text"/>
            { errors.name && <span className={ styles.errorEdit }>{ errors.name.message }</span> }
            </div>

            <div className={styles.editInput}><b>Телефон: </b>
                <input ref={ register({ required }) } value={ numberInputValue }
                       onChange={ ( e ) => setNumberInputValue(e.currentTarget.value) } name='number' placeholder='Телефон'
                       type="number"/>
            { errors.number && <span className={ styles.errorEdit }>{ errors.number.message }</span> }
            </div>
        </form>
    )
}

export default ContactsItemForm
