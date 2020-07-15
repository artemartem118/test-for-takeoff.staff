import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

import authReducer from './auth-reducer'
import contactsReducer from './contscts-reducer'

const rootReducer = combineReducers({
    auth: authReducer,
    contactsPage: contactsReducer
})

const store = createStore(rootReducer, compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

export default store
