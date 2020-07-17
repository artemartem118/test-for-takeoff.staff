import React from 'react'
import styles from './header.module.css'

const Header = ( { signOutUser, isAuth, email, redirect } ) => {

    return (
        <div className={ `${styles.header} wrapper` }>
            <div>Личный кабинет</div>
            <div>
                { !isAuth && <div>
                    <button onClick={ () => redirect('/signin') }>Войти</button>
                    <button onClick={ () => redirect('/signup') }>Регистрация</button>
                </div> }
                { isAuth && <div>{ email }
                    <button onClick={ signOutUser }>Выйти</button>
                </div> }
            </div>
        </div>
    )
}

export default Header
