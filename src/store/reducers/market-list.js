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


        case Types.CREATE_ML:
        case Types.DELETE_ML:
            return {
                ...state,
                loading: true,
            }
        
        case Types.CREATE_SUCCESS:
        case Types.DELETE_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
            }
            
        case Types.CREATE_ERROR:
        case Types.DELETE_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
            }

        default:
            return state;
    }
}   