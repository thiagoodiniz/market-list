import { Types } from '../actions/market-list';

const INITIAL_STATE = {
    loading: false,
    error: false,
    marketLists: [],
}

export default function marketLists(state=INITIAL_STATE, action) {
    switch(action.type){

        case Types.LOAD_ML:
            return {
                loading: true,
                error: false,
                marketLists: [],
            }

        case Types.LOAD_SUCCESS:
            return {
                loading: false,
                error: false,
                marketLists: action.marketLists,
            }

        case Types.LOAD_ERROR:
            return {
                loading: false,
                error: true,
                marketLists: [],
            }

        default:
            return state;
    }
}   