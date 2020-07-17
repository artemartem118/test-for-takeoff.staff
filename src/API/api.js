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
        return  instance.post('/signin', loginData)
            .catch(e => e.message)
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
    },
    putContact( id, data ) {
        return instance.put('/contacts/' + id, data)
    }

}
