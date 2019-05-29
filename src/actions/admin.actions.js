import { adminConstants } from '../constans/admin.constans'

export function login_request(admin) {
    console.log('action admin: ', admin)
    return {
        type: adminConstants.LOGIN_REQUEST,
        payload: admin
    }
}

export function login_success(admin) {
    return {
        type: adminConstants.LOGIN_SUCCESS,
        payload: admin
    }
}

export function login_failure(error) {
    return {
        type: adminConstants.LOGIN_FAILURE,
        payload: error
    }
}

export function getAdmins_request(admin) {
    return {
        type: adminConstants.GETADMINS_REQUEST,
        payload: admin
    }
}

export function getAdmins_success(admin) {
    return {
        type: adminConstants.GETADMINS_SUCCESS,
        payload: admin
    }
}

export function getAdmins_failure(error) {
    return {
        type: adminConstants.GETADMINS_FAILURE,
        payload: error
    }
}

export function getTranslations_request(trans) {
    return {
        type: adminConstants.GETTRANSLATIONS_REQUEST,
        payload: trans
    }
}

export function getTranslations_success(trans) {
    return {
        type: adminConstants.GETTRANSLATIONS_SUCCES,
        payload: trans
    }
}

export function getTranslations_failure(trans){
    return {
        type: adminConstants.GETTRANSLATIONS_FAILURE,
        payload: trans
    }
}