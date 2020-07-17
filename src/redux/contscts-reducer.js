import { contactsAPI } from '../API/api'

const SET_CONTACTS = 'contacts/SET_CONTACTS'
const TOGGLE_DISABLED = 'contacts/TOGGLE_DISABLED'
const SET_FIND_INPUT_VALUE = 'contacts/SET_FIND_INPUT_VALUE'

const initialState = {
    contacts: [],
    findInputValue: '',
    visibleContacts: [],
    isDisabled: false
}

const contactsReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case TOGGLE_DISABLED:
        case SET_FIND_INPUT_VALUE:
        case SET_CONTACTS: {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state
    }
}

const actions = {
    setFindInputValue: ( findInputValue ) => ({
        type: SET_CONTACTS,
        payload: { findInputValue }
    }),
    setContacts: ( contacts ) => ({
        type: SET_CONTACTS,
        payload: { contacts }
    }),
    setVisibleContacts: ( visibleContacts ) => ({
        type: SET_CONTACTS,
        payload: { visibleContacts }
    }),
    toggleDisabled: ( isDisabled ) => ({
        type: TOGGLE_DISABLED,
        payload: { isDisabled }
    })
}

export const setFindInputValue = ( findInputValue ) => ( dispatch ) => {
    dispatch(actions.setFindInputValue(findInputValue))
    dispatch(setVisibleContacts())
}

export const getContacts = () => async ( dispatch ) => {
    const contactsData = await contactsAPI.getContacts()
    if ( contactsData.status === 200 ) {
        dispatch(actions.setContacts(contactsData.data))
    }
}

export const setVisibleContacts = () => async ( dispatch, getState ) => {
    await dispatch(getContacts())
    const contacts = getState().contactsPage.contacts
    const findInputValue = getState().contactsPage.findInputValue
    dispatch(actions.setVisibleContacts(contacts.filter(item => item.name.toLowerCase().includes(findInputValue))))
}

export const setToggleDisabled = ( isDisabled ) => ( dispatch ) => {
    dispatch(actions.toggleDisabled(isDisabled))
}

export const deleteContact = ( id ) => async ( dispatch ) => {
    const response = await contactsAPI.deleteContact(id)
    if ( response.status === 200 ) {
        dispatch(setVisibleContacts())
    }
}

export const postContact = ( data ) => async ( dispatch ) => {
    const response = await contactsAPI.postContact(data)
    if ( response.status === 201 ) {
        dispatch(setVisibleContacts())
    }
}

export const putContact = ( id, data ) => async ( dispatch ) => {
    const response = await contactsAPI.putContact(id, data)
    if ( response.status === 200 ) {
        dispatch(setVisibleContacts())
    }
}

export default contactsReducer
