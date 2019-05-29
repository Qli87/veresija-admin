import { adminConstants } from '../constans/admin.constans'

// let user = JSON.parse(localStorage.getItem('user'));
// const initialState = user ? { loggedIn: true, user } : {}

const initialState = {
    admin: [],
    loggingIn: false,
    loggedIn: false,
    loading: false
}

export default function adminReducers(state = initialState, action) {
    switch(action.type) {
        case adminConstants.LOGIN_REQUEST:
            return {
                ...state,
                loggingIn: true,
                loading: true,
                admin: action.payload
            }
        case adminConstants.LOGIN_SUCCESS:
            return {
                ...state,
                loggedIn: true,
                admin: action.payload
            }
        case adminConstants.LOGIN_FAILURE:
            return {
                ...state,
                loggedIn: false,
                error: action.payload
            }
        case adminConstants.GETTRANSLATIONS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case adminConstants.GETTRANSLATIONS_SUCCES:
            return {
                ...state,
                loading: false,
                translations: action.payload
            }   
        case adminConstants.GETTRANSLATIONS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}