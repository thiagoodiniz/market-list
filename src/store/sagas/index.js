import {takeLatest, all } from 'redux-saga/effects';
import { Types as MarketListActions } from '../actions/market-list';
import { loadMarketListRequest } from './market-list';

export default function* rootSaga() {
    return yield all([
        takeLatest(MarketListActions.LOAD_MARKET_LISTS, loadMarketListRequest),
    ]);
}