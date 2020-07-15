import { contactsAPI } from '../API/api'

const SET_CONTACTS = 'contacts/SET_CONTACTS'

const initialState = {
    contacts: []
}

const contactsReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
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

const setContacts = ( contacts ) => ({
    type: SET_CONTACTS,
    payload: { contacts }
})

export const getContacts = () => async ( dispatch ) => {
    const contactsData = await contactsAPI.getContacts()
    if ( contactsData.status === 200 ) {
        dispatch(setContacts(contactsData.data))
    }
}

export const deleteContact = ( id ) => async ( dispatch ) => {
    const response = await contactsAPI.deleteContact(id)
    if ( response.status === 200 ) {
        dispatch(getContacts())
    }
}

export const postContact = ( data ) => async ( dispatch ) => {
    const response = await contactsAPI.postContact(data)
    if ( response.status === 201 ) {
        dispatch(getContacts())
    }
}

export default contactsReducer
