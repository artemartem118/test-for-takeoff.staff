import React, { useEffect, useState } from 'react'

import styles from './contacts.module.css'

const FindContact = ( { findInputHandler } ) => {

    const [ name, setName ] = useState('')

    useEffect(() => {
        findInputHandler(name)
    }, [ name ])

    return (
        <div className={ styles.findWrapper }>
            <input value={ name } onChange={ ( e ) => setName(e.currentTarget.value) } placeholder='Введите имя'
                   type="text"/>
        </div>
    )

}

export default FindContact
