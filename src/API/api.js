import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:5555/'
})

export const authAPI = {
    signup( registerData ) {
        return instance.post('/register', registerData)
            .catch(e => e.message)
    },
    signin( loginData ) {
        return instance.post('/signin', loginData)
    }
}
export const contactsAPI = {
    getContacts() {
        return instance.get('/contacts')
    },
    deleteContact( id ) {
        return instance.delete('/contacts/' + id)
    },
    postContact(data) {
        return instance.post('/contacts', data)
    }

}
