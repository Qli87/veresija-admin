import { userConstants } from '../constans/user.constants'


export function getUsers_request(user) {
    return {
        type: userConstants.GETUSERS_REQUEST,
        payload: user
    }
}

export function getUsers_success(user) {
    return {
        type: userConstants.GETUSERS_SUCCESS,
        payload: user
    }
}

export function getUsers_failure(error) {
    return {
        type: userConstants.GETUSERS_FAILURE,
        payload: error
    }
}

export function deleteUser_request(user) {
    return {
        type: userConstants.DELETE_USER_REQUEST,
        payload: user
    }
}

export function deleteUser_success(user) {
    return {
        type: userConstants.DELETE_USER_SUCCESS,
        payload: user
    }
}

export function deleteUser_failure(error) {
    return {
        type: userConstants.DELETE_USER_FAILURE,
        payload: error
    }
}

export function activateUser_request(_userId, _date) {
    return {
        type: userConstants.ACTIVATE_USER_REQUEST,
        userId: _userId,
        date: _date
    }
}

export function activateUser_success(_userId, _date) {
    return {
        type: userConstants.ACTIVATE_USER_SUCCESS,
        userId: _userId,
        date: _date
    }
}

export function activateUser_failure(error) {
    return {
        type: userConstants.ACTIVATE_USER_FAILURE,
        payload: error
    }
}

export function blockUser_request(_userId, _status) {
    return {
        type: userConstants.BLOCK_USER_REQUEST,
        userId: _userId,
        status: _status
    }
}

export function blockUser_success(_userId) {
    return {
        type: userConstants.BLOCK_USER_SUCCESS,
        userId: _userId
        // status: _status
    }
}

export function blockUser_failure(error) {
    return {
        type: userConstants.BLOCK_USER_FAILURE,
        payload: error
    }
}

export function userDetails_request(user) {
    return {
        type: userConstants.USER_DETAILS_REQUEST,
        payload: user
    }
}

export function userDetails_success(user) {
    return {
        type: userConstants.USER_DETAILS_SUCCESS,
        payload: user
    }
}

export function userDetails_failure(error) {
    return {
        type: userConstants.USER_DETAILS_FAILURE,
        payload: error
    }
}

export function userEdit_request(user) {
    return {
        type: userConstants.USER_EDIT_REQUEST,
        payload: user
    }
}

export function userEdit_success(user) {
    return {
        type: userConstants.USER_EDIT_SUCCESS,
        payload: user
    }
}

export function userEdit_failure(error) {
    return {
        type: userConstants.USER_EDIT_FAILURE,
        payload: error
    }
}


export function getUsersHP_request(user) {
    return {
        type: userConstants.GETUSERS_REQUEST_HP,
        payload: user
    }
}

export function getUsersHP_success(user) {
    return {
        type: userConstants.GETUSERS_SUCCESS_HP,
        payload: user
    }
}

export function getUsersHP_failure(error) {
    return {
        type: userConstants.GETUSERS_FAILURE_HP,
        payload: error
    }
}

export function getLicencesHP_request(licences) {
    return {
        type: userConstants.GETLICENCES_REQUEST_HP,
        payload: licences
    }
}

export function getLicencesHP_success(licences) {
    return {
        type: userConstants.GETLICENCES_SUCCESS_HP,
        payload: licences
    }
}

export function getLicencesHP_failure(error) {
    return {
        type: userConstants.GETLICENCES_FAILURE_HP,
        payload: error
    }
}

export function getInactiveUsers_request(user) {
    return {
        type: userConstants.GETINACTIVEUSERS_REQUEST,
        payload: user
    }
}

export function getInactiveUsers_success(user) {
    return {
        type: userConstants.GETINACTIVEUSERS_SUCCESS,
        payload: user
    }
}

export function getInactiveUsers_failure(error) {
    return {
        type: userConstants.GETINACTIVEUSERS_FAILURE,
        payload: error
    }
}


export function addUser_request(user) {
    return {
        type: userConstants.USER_ADD_REQUEST,
        payload: user
    }
}

export function addUser_success(user) {
    return {
        type: userConstants.USER_ADD_SUCCESS,
        payload: user
    }
}

export function addUser_failure(error) {
    return {
        type: userConstants.USER_ADD_FAILURE,
        payload: error
    }
}

export function licenceExpired_request(users) {
    return {
        type: userConstants.GETEXPIREDLICENCES_REQUEST,
        payload: users
    }
}

export function licenceExpired_success(users) {
    return {
        type: userConstants.GETEXPIREDLICENCES_SUCCESS,
        payload: users
    }
}

export function licenceExpired_failure(error) {
    return {
        type: userConstants.GETEXPIREDLICENCES_FAILURE,
        payload: error
    }
}

export function licenceExpiredSoon_request(users) {
    return {
        type: userConstants.GETEXPIREDSOONLICENCES_REQUEST,
        payload: users
    }
}

export function licenceExpiredSoon_success(users) {
    return {
        type: userConstants.GETEXPIREDSOONLICENCES_SUCCESS,
        payload: users
    }
}

export function licenceExpiredSoon_failure(error) {
    return {
        type: userConstants.GETEXPIREDSOONLICENCES_FAILURE,
        payload: error
    }
}