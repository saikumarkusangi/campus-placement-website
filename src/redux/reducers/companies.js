import * as actionTypes from '../actions/type.js';

export const companiesReducer = (state=[],action) => {
    switch (action.type){
        case actionTypes.GETALL_COMPANIES:
            return action.payload
        default:
            return state
    }
}