import { call, put } from 'redux-saga/effects'
import { services } from '../../services'
import { Creators as MarketListActions } from '../actions/market-list'

export function* loadMarketListRequest(action){
    try{
        const marketLists = yield call(services.loadMarketLists);
        yield put(MarketListActions.loadMarketListsSuccess(marketLists.marketLists));
    } catch(err){
        console.log(err)
        yield put(MarketListActions.loadMarketListsError());
    }
} 