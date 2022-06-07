import { fork, all } from 'redux-saga/effects';

import {
    watchCreateVaccineBadgeLog,
    watchRetrieveVaccineBadgeLogs,
} from './badges';

function* mainSaga() {
    yield all([
        fork(watchCreateVaccineBadgeLog),
        fork(watchRetrieveVaccineBadgeLogs),
    ]);
}

export default mainSaga;