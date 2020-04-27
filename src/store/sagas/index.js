import {takeLatest, all } from 'redux-saga/effects';
import { Types as MarketListActions } from '../actions/market-list';
import { loadMarketListRequest, createMarketListRequest } from './market-list';

export default function* rootSaga() {
    return yield all([
        takeLatest(MarketListActions.LOAD_ML, loadMarketListRequest),
        takeLatest(MarketListActions.CREATE_ML, createMarketListRequest),
    ]);
}