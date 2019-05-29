import { all } from 'redux-saga/effects';
import { adminSaga } from './admin.saga'
import { userSaga } from './user.saga'

export default function* rootSaga() {
    yield all ([
        adminSaga(),
        userSaga()
    ])
}