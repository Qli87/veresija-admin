import { call, takeEvery, put } from 'redux-saga/effects';
import { api_getUsers, api_deleteUser, api_activateUser, api_userDetails, api_editUser, api_getUsersHP, api_getLicencesHP, api_getInactiveUsers, api_addUser, api_getExpiredLicences, api_getLicencesExpSoon } from '../api/user.api'
import { getUsers_failure, getUsers_success, deleteUser_failure, deleteUser_success, activateUser_failure, activateUser_success, blockUser_success, blockUser_failure, userDetails_success, userDetails_failure, userEdit_failure, userEdit_success, getUsersHP_success, getUsersHP_failure, getLicencesHP_failure, getLicencesHP_success, getInactiveUsers_failure, getInactiveUsers_success, addUser_failure, addUser_success, licenceExpired_success, licenceExpired_failure, licenceExpiredSoon_failure, licenceExpiredSoon_success } from '../actions/user.actions';
import { userConstants } from '../constans/user.constants'


export function* getUsers() {
    const response = yield call(api_getUsers);
    if(!response || !response.data){
        return yield put(getUsers_failure('Internal server error for getUsers'));
    }
    if(response.status === 200){
        return yield put(getUsers_success(response.data))
    } else {
        return yield put(getUsers_failure('Error for getUsers'))
    }
}

export function* getUsersForHP() {
    const response = yield call(api_getUsersHP);
    if(!response || !response.data){
        return yield put(getUsersHP_failure('Internal server error for getUsers'));
    }
    if(response.status === 200){
        return yield put(getUsersHP_success(response.data))
    } else {
        return yield put(getUsersHP_failure('Error for getUsers'))
    }
}

export function* deleteUser(action) {
    const response  = yield call(api_deleteUser(action))
    if(!response || !response.data){
        return yield put(deleteUser_failure('Internal server error for delete user`'))
    }
    if(response.status === 200) {
        return yield put(deleteUser_success(response.data))
    } else {
        return yield put(deleteUser_failure('Error for delete user'))
    }
}

export function* activateUser(action) {
    const response = yield call(api_activateUser(action));
    if(!response || !response.data) {
        return yield put(activateUser_failure('Internal server error for activate user'))
    }
    if(response.status === 200){
        return yield put(activateUser_success(response.data))
    } else {
        return yield put(activateUser_failure('Error for activate user'))
    }
}

export function* blockUser(action) {
    const response = yield call()
    if(!response || !response.data){
        return yield put(blockUser_failure('Internal server error for block user'))
    }
    if(response.status === 200) {
        return yield put(blockUser_success(response.data))
    } else {
        return yield put(blockUser_failure('Error for block user'))
    }
}

export function* userDetails(action) {
    const response = yield call(api_userDetails(action.id));
    if(!response || !response.data) {
        return yield put(userDetails_failure('Internal server error for user details'))
    }
    if(response.status === 200) {
        return yield put(userDetails_success(response.data))
    } else {
        return yield put(userDetails_failure('Error for user details'))
    }
}

export function* userEdit(action) {
    const response = yield call(api_editUser(action));
    if(!response || !response.data) {
        return yield put(userEdit_failure('Internal server for edit user'))
    }
    if(response.status === 200){
        return yield put(userEdit_success(response.data))
    } else {
        return yield(userEdit_failure('Error for user edit'))
    }
}

export function* getLicencesHP() {
    const response = yield call(api_getLicencesHP)
    if(!response || !response.data) {
        return yield put(getLicencesHP_failure('Internal server error fot get licences for home page'))
    }
    if(response.status === 200) {
        return yield put(getLicencesHP_success(response.data))
    } else {
        return yield put(getLicencesHP_failure('Error for get licences for hp'))
    }
}

export function* getInactiveUsers() {
    const response = yield call(api_getInactiveUsers)
    if(!response || !response.data) {
        return yield put(getInactiveUsers_failure('Internal server error for get inactive users'))
    }
    if(response.status === 200) {
        return yield put(getInactiveUsers_success(response.data))
    } else {
        return yield put(getInactiveUsers_failure('Error for get inactive users'))
    }
}

export function* userAdd(action) {
    const response = yield call(api_addUser(action))
    if(!response || !response.data) {
        return yield put(addUser_failure('Internal server error for adding user'))
    }
    if(response.status === 200) {
        return yield put(addUser_success(response.data))
    } else {
        return yield put(addUser_failure('Error for add user'))
    }
}

export function* licenceExpired() {
    const response = yield call(api_getExpiredLicences);
    if(!response || !response.data){
        return yield put(licenceExpired_failure('Internal server errro for getting expired licences'))
    }
    if(response.status === 200) {
        return yield put(licenceExpired_success(response.data))
    } else {
        return yield put(licenceExpired_failure('Error for getLicenceExpired'))
    }
}

export function* licenceExpiredSoon() {
    const response = yield call(api_getLicencesExpSoon);
    if(!response || !response.data){
        return yield put(licenceExpiredSoon_failure('Internal server errro for getting expired licences'))
    }
    if(response.status === 200) {
        return yield put(licenceExpiredSoon_success(response.data))
    } else {
        return yield put(licenceExpiredSoon_failure('Error for getLicenceExpired'))
    }
}
 
export function* userSaga() {
    yield takeEvery(userConstants.GETUSERS_REQUEST, getUsers);
    yield takeEvery(userConstants.DELETE_USER_REQUEST, deleteUser);
    yield takeEvery(userConstants.ACTIVATE_USER_REQUEST, activateUser);
    yield takeEvery(userConstants.BLOCK_USER_REQUEST, blockUser);
    yield takeEvery(userConstants.USER_DETAILS_REQUEST, userDetails);
    yield takeEvery(userConstants.USER_DETAILS_REQUEST, userEdit);
    yield takeEvery(userConstants.GETUSERS_REQUEST_HP, getUsersForHP);
    yield takeEvery(userConstants.GETLICENCES_REQUEST_HP, getLicencesHP);
    yield takeEvery(userConstants.GETINACTIVEUSERS_REQUEST, getInactiveUsers)
    yield takeEvery(userConstants.USER_ADD_REQUEST, userAdd);
    yield takeEvery(userConstants.GETEXPIREDLICENCES_REQUEST, licenceExpired);
    yield takeEvery(userConstants.GETEXPIREDSOONLICENCES_REQUEST, licenceExpiredSoon)
}