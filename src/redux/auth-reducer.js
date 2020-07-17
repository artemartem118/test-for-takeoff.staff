import { authAPI } from '../API/api'

const SIGN = 'auth/SIGN'
const STATUS_SIGN_UP = 'auth/STATUS_SIGN_UP'

const initialState = {
    email: null,
    isAuth: false,
    statusSignUp: ''
}

const authReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case SIGN:
        case  STATUS_SIGN_UP: {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state
    }
}

const setUserData = ( email, isAuth ) => ({
    type: SIGN,
    payload: { email, isAuth }
})

const setStatusSignUp = ( statusSignUp ) => ({
    type: STATUS_SIGN_UP,
    payload: {
        statusSignUp: statusSignUp
    }
})

export const signOutUser = () => (dispatch) => {
    dispatch(setUserData(null, false))
}

export const signinUser = ( { email, password } ) => async ( dispatch ) => {
    const loginUserData = await authAPI.signin({ email, password })
    if ( loginUserData.status === 200 ) {
        dispatch(setUserData(email, true))
    }
}

export const signupUser = ( { email, password } ) => async ( dispatch ) => {

    const loginUserData = await authAPI.signup({ email, password })
    if ( loginUserData.status === 201 ) {
        dispatch(setStatusSignUp('Вы зарегестрировались'))
        setTimeout(() => dispatch(setStatusSignUp('')), 2000)
    }
    if ( typeof loginUserData === 'string' ) {
        dispatch(setStatusSignUp('Что-то пошло не так'))
        setTimeout(() => dispatch(setStatusSignUp('')), 2000)
    }
}

export default authReducer
