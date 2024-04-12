import { put } from 'redux-saga/effects';
import {getTransationsSuccess, getTransationsError} from '../actions/actionCreator';
import {getUserTransactions} from '../api/rest/restController';

export function* getUserTransactionsSaga(action) {
    try {
        const {data: {data}} = yield getUserTransactions();
        yield put(getTransationsSuccess(data));
    }catch(error){
        yield put(getTransationsError(error));
    }
}