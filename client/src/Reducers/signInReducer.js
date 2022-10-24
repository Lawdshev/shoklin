
export const initialState = {
    email: '',
    password: '',
    error: ''
}

export const signInReducer = (state, action) => {
    switch (action.type) {
        case 'SET_EMAIL':
            return {
                ...state,
                email: action.Payload
            }
        case 'SET_PASSWORD':
            return {
                ...state,
                password: action.Payload
            }
        case 'SET_ERROR':
            return {
                ...state,
                error: `invalid login parameter(s)`
            }
        default:
            return state
    }
}