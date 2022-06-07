import * as types from '../types/badges';


export const createVaccineBadgesLogStarted = payload => ({
    type: types.CREATE_VACCINE_BATCH_LOG_STARTED,
    payload: payload,
});

export const createVaccineBadgesLogCompleted = () => ({
    type: types.CREATE_VACCINE_BATCH_LOG_COMPLETED,
});

export const retrieveVaccineBadgesLogsStarted = () => ({
    type: types.RETREIVE_VACCINE_BADGE_LOGS_STARTED,
});

export const retrieveVaccineBadgesLogsCompleted = vaccineBadgesLogs => ({
    type: types.RETREIVE_VACCINE_BADGE_LOGS_COMPLETED,
    payload: vaccineBadgesLogs
});
