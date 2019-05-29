import { call, takeEvery, put } from 'redux-saga/effects';
import { api_getAdmins, api_login, api_getTranslations } from '../api/admin.api'
import { getAdmins_failure, getAdmins_success, login_failure, login_success, getTranslations_failure, getTranslations_success } from '../actions/admin.actions'
import { adminConstants } from '../constans/admin.constans'

export function* getAdmins() {
    const response = yield call(api_getAdmins);
    if(!response || !response.data) {
        return yield put(getAdmins_failure('Internal server error for getAdmins'))
    }
    if(response.status === 200) {
        return yield put(getAdmins_success(response.data));
    } else {
        return yield put(getAdmins_failure('Error for getAdmins'))
    }
}

export function* login(action) {
    console.log('saga action: ', action);
    const response = yield call(api_login, action)
    if(!response || !response.data) {
        return yield put(login_failure('Internal server error for login!'))
    }
    if(response.status === 200) {
        return yield put(login_success, response.data);
        //dodati u local storage potrebne podatke o useru i jwt token
    } else {
        return yield put(login_failure('Logging error!'))
    }
} 

export function* getTranslations() {
    const response = yield call(api_getTranslations);
    if(!response || !response.data) {
        return yield put(getTranslations_failure('Internal server error for translations!'))
    }
    if(response.status === 200) {
        return yield put(getTranslations_success(response.data))
    } else {
        return yield put(getTranslations_failure('Translations error'))
    }
}

export function* adminSaga() {
    yield takeEvery(adminConstants.GETADMINS_REQUEST, getAdmins);
    yield takeEvery(adminConstants.LOGIN_REQUEST, login);
    yield takeEvery(adminConstants.GETTRANSLATIONS_REQUEST, getTranslations)
}