import React, { useState } from 'react'

import styles from './contacts.module.css'
import { useForm } from 'react-hook-form'

const AddContact = ( { onSubmit } ) => {

    const { register, handleSubmit, errors } = useForm()

    const required = 'Это поля обязательое'

    const [ name, setName ] = useState('')
    const [ number, setNumber ] = useState('')

    return (
        <form onSubmit={ handleSubmit(onSubmit.bind(null, setName, setNumber)) }>
            <div className={ styles.addContact }>
                <div><b>Имя </b>
                    <input ref={ register({ required }) } value={ name }
                           onChange={ ( e ) => setName(e.currentTarget.value) } name='name' placeholder='Имя'
                           type="text"/>
                    { errors.name && <div className={ styles.error }>{ errors.name.message }</div> }
                </div>
                <div><b>Телефон </b>
                    <input ref={ register({ required }) } value={ number }
                           onChange={ ( e ) => setNumber(e.currentTarget.value) } name='number' placeholder='Телефон'
                           type="number"/>
                    { errors.number && <div className={ styles.error }>{ errors.number.message }</div> }
                </div>
                <div>
                    <button>Добавить</button>
                </div>
            </div>
        </form>
    )
}

export default AddContact
