export const initialState = {
    name: '',
    email: '',
    address: '',
    phone: '',
    password: '',
    error: ''
}

export const regReducer = (state, action) => {
    switch (action.type) {
        case 'SET_NAME':
            return {
                ...state,
                name: action.Payload
            }
        case 'SET_EMAIL':
            return {
                ...state,
                email: action.Payload
            }
        case 'SET_ADDRESS':
            return {
                ...state,
                address: action.Payload
            }
        case 'SET_PHONE':
            return {
                ...state,
                phone: action.Payload
            }
        case 'SET_PASSWORD':
            return {
                ...state,
                password: action.Payload
            }
        case 'SET_ERROR':
            return {
                ...state,
                error: action.Payload
            }
        default:
            return state
    }
}