import { takeLatest, put, call } from 'redux-saga/effects';

import * as actions from '../actions/flashcard';
import * as actionTypes from '../../constans/actionTypes';

function* fetchGetAllFlashCards() {
	try {
		const response = yield call(fetch, 'http://localhost:3000/api/flashcard');

		const result = yield response.json();

		yield put(actions.getAllFlashCardsSuccess(result));
	} catch (e) {
		yield put(
			actions.getAllFlashCardsError({ stringified: JSON.stringify(e) }),
		);
	}
}

export function* getAllFlashCards() {
	yield takeLatest(
		actionTypes.getAllFlashCardsRequestType,
		fetchGetAllFlashCards,
	);
}
