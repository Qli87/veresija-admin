import { userConstants } from '../constans/user.constants'

const initialState = {
    users: [],
    user: [],
    loading: false,
    licences: []
}

export default function userReducer(state = initialState, action) {
    switch(action.type) {
        case userConstants.GETUSERS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case userConstants.GETUSERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload
            }
        case userConstants.GETUSERS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case userConstants.DELETE_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case userConstants.DELETE_USER_SUCCESS:
            return {
                ...state,
                users: state.users.filter(item => item.id !== action.payload.id)
            }
        case userConstants.DELETE_USER_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        case userConstants.ACTIVATE_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case userConstants.ACTIVATE_USER_SUCCESS:
            const updatedItems = state.users.map(item => {
                if(item.id === action.userId) {
                    return Object.assign({}, item, {
                        end_with: action.date,
                        status: 'active'
                    })
                }
                return item
            })
            return {
                ...state,
                users: updatedItems
            }
        case userConstants.ACTIVATE_USER_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        case userConstants.BLOCK_USER_REQUEST:
            return {
                ...state,
                userId: action.userId,
                status: action.status
            }
        case userConstants.BLOCK_USER_SUCCESS:
            // console.log('action: ',action)
            const activeUsers = state.users.map(item => {
                if(item.id === action.userId) {
                    console.log('item: ', item)
                    return Object.assign({}, item, {
                        active: !item.active
                    })
                }
                return item
            })
            return {
                ...state,
                users: activeUsers
            }
        case userConstants.BLOCK_USER_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        case userConstants.USER_DETAILS_REQUEST:
            return {
                ...state,
                loading: true 
            }
        case userConstants.USER_DETAILS_SUCCESS:
            const index = state.users.findIndex(item => item.id == action.payload)
            if(index > -1) {
                let user = state.users.find(item => item.id == action.payload)
                return {
                    ...state,
                    users: state.users,
                    user: user
                }
            }
        case userConstants.USER_DETAILS_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        case userConstants.USER_EDIT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case userConstants.USER_EDIT_SUCCESS:
            const editedUsers = state.users.map(item => {
                if(item.id === action.payload.id) {
                    // return {...item, ...action.payload.name}
                    return Object.assign({}, item, {
                        id: action.payload.id,
                        name: action.payload.name,
                        address: action.payload.address,
                        status: action.payload.status,
                        start_from: action.payload.start_from,
                        end_with: action.payload.end_with
                    })
                }
                return item
            })
            return {
                ...state,
                users: editedUsers,
                user: editedUsers[action.payload.id-1]
            }
        case userConstants.USER_EDIT_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        case userConstants.USER_ADD_REQUEST:
            return {
                ...state,
                loading: true
            }
        case userConstants.USER_ADD_SUCCESS:
            return {
                ...state,
                users: state.users.concat([action.payload])
            }
        case userConstants.USER_ADD_FAILURE:
            return {
                ...state,
                loading: false,
                errro: action.payload
            }
        case userConstants.GETUSERS_REQUEST_HP:
            return {
                ...state,
                loading: true
            }
        case userConstants.GETUSERS_SUCCESS_HP:
            return {
                ...state,
                loading: false,
                users: action.payload
            }
        case userConstants.GETUSERS_FAILURE_HP:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case userConstants.GETLICENCES_REQUEST_HP:
            return {
                ...state,
                loading: true
            }
        case userConstants.GETLICENCES_SUCCESS_HP:
            return {
                ...state,
                loading: false,
                licences: action.payload
            }
        case userConstants.GETLICENCES_FAILURE_HP:
            return {
                ...state,
                error: action.payload
            }
        case userConstants.GETINACTIVEUSERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case userConstants.GETINACTIVEUSERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload,
                status: "active"
            }
        case userConstants.GETINACTIVEUSERS_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        case userConstants.GETEXPIREDLICENCES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case userConstants.GETEXPIREDLICENCES_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload
            }
        case userConstants.GETEXPIREDLICENCES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case userConstants.GETEXPIREDSOONLICENCES_REQUEST:
            return {
                ...state,
                loading: true,
                users: action.payload
            }
        case userConstants.GETEXPIREDSOONLICENCES_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload
            }
        case userConstants.GETEXPIREDSOONLICENCES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
} 