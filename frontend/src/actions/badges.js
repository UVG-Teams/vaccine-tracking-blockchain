import * as types from '../types/badges';


export const createVaccineBadgeLogStarted = (user_address, contract, badgePayload) => ({
    type: types.CREATE_VACCINE_BATCH_LOG_STARTED,
    payload: {
        user_address,
        contract,
        badgePayload,
    },
});

export const createVaccineBadgeLogCompleted = () => ({
    type: types.CREATE_VACCINE_BATCH_LOG_COMPLETED,
});

export const retrieveVaccineBadgeLogsStarted = (user_address, contract) => ({
    type: types.RETREIVE_VACCINE_BADGE_LOGS_STARTED,
    payload: {
        user_address,
        contract,
    }
});

export const retrieveVaccineBadgeLogsCompleted = vaccineBadgeLogs => ({
    type: types.RETREIVE_VACCINE_BADGE_LOGS_COMPLETED,
    payload: vaccineBadgeLogs
});
