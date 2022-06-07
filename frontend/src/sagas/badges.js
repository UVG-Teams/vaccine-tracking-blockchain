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
        // const result = yield action.payload.contract.methods.use_computer(action.payload.id).send({ from: action.payload.user_address, gas: 50000, gasPrice: 1e6 }, (error, res) => {
        //     console.log('error', error);
        //     console.log('res', res);
        //     if (res != undefined) {
        //         return put(actions.retrieveComputerIsAvailableStarted(action.payload.contract, action.payload.id));
        //     }
        // });
        // console.log('result', result);
        console.log('result');
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
        const result = yield action.payload.contract.methods.getVaccineBadgesLogs().send({ from: action.payload.user_address, gas: 50000, gasPrice: 1e6 }, (error, res) => {
            console.log('error', error);
            console.log('res', res);
            // if (res != undefined) {
                // return put(actions.retrieveVaccineBadgeLogsCompleted(action.payload.contract, action.payload.id));
            // }
        });
        console.log('result', result);
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
