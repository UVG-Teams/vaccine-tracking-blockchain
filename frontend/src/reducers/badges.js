import { combineReducers } from 'redux';
import * as types from '../types/badges';

const byId = (state = {}, action) => {
    switch(action.type) {
        case types.RETREIVE_VACCINE_BADGE_LOGS_COMPLETED: {
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
