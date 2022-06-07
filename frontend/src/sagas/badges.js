import {
    call,
    takeEvery,
    put,
    // race,
    // all,
    // delay,
    select,
} from 'redux-saga/effects';

// import * as selectors from '../reducers';
import * as actions from '../actions/badges';
import * as types from '../types/badges';


function* createVaccineBadgeLog(action) {
    try {
        const badgePayload = action.payload.badgePayload;
        const result = yield action.payload.contract.methods.createVaccineBatch(
            badgePayload.batch_num,
            badgePayload.vaccine_type,
            badgePayload.location,
            badgePayload.temperature,
            badgePayload.timestamp
        ).send({ from: action.payload.user_address, gas: 500000, gasPrice: 1e6 }, (error, res) => {
            // console.log('error', error);
            // console.log('res', res);
            if (res != undefined) {
                return true;
            }
        });

        if (result) {
            yield put(actions.retrieveVaccineBadgeLogsStarted(action.payload.user_address, action.payload.contract));
        }
    } catch (e) {
        console.log('error', e);
    }
}
    
export function* watchCreateVaccineBadgeLog() {
    yield takeEvery(
        types.CREATE_VACCINE_BATCH_LOG_STARTED,
        createVaccineBadgeLog,
    );
}

function* retrieveVaccineBadgeLogs(action) {
    try {
        const result = yield action.payload.contract.methods.getVaccineBatches().call({}, (error, res) => {
            // console.log('error', error);
            // console.log('res', res);
            if (res != undefined) {
                return res
            }
        });
        yield put(actions.retrieveVaccineBadgeLogsCompleted(result));
    } catch (e) {
        console.log('error', e);
    }
}
    
export function* watchRetrieveVaccineBadgeLogs() {
    yield takeEvery(
        types.RETREIVE_VACCINE_BADGE_LOGS_STARTED,
        retrieveVaccineBadgeLogs,
    );
}
