import { combineReducers } from 'redux';
import * as types from '../types/badges';

const byId = (state = {}, action) => {
    switch(action.type) {
        case types.RETREIVE_VACCINE_BADGE_LOGS_COMPLETED: {
            const badgesLogs = [];

            action.payload.forEach(badgeLog => {
                badgesLogs.push([ badgeLog[0], badgeLog[1], badgeLog[2], badgeLog[3], badgeLog[4],]);
            })

            return action.payload;
        }
        default: {
            return state;
        }
    }
};


export default combineReducers({
    byId,
});
