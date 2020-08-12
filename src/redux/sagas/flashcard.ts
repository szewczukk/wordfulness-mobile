import { takeLatest, put, call, takeEvery } from 'redux-saga/effects';

import { Action } from '../../constans/types';
import * as actions from '../actions/flashcard';
import * as actionTypes from '../../constans/actionTypes';

function* fetchGetAllFlashCards() {
	try {
		const response = yield call(
			fetch,
			'http://192.168.1.13:3000/api/flashcard',
		);

		const result = yield response.json();

		yield put(actions.getAllFlashCardsSuccess(result));
	} catch (e) {
		yield put(actions.getAllFlashCardsError(JSON.stringify(e)));
	}
}

function* fetchCreateFlashCard(action: Action) {
	try {
		const response = yield call(
			fetch,
			'http://192.168.1.13:3000/api/flashcard',
			{
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(action.payload),
			},
		);

		const result = yield response.json();

		yield put(actions.getAllFlashCardsSuccess(result));

		yield call(fetchGetAllFlashCards);
	} catch (e) {
		yield put(actions.createFlashCardsError(JSON.stringify(e)));
	}
}

function* fetchDeleteFlashCard(action: Action) {
	try {
		const { payload } = action;
		yield call(fetch, `http://192.168.1.13:3000/api/flashcard/${payload}`, {
			method: 'DELETE',
		});

		yield call(fetchGetAllFlashCards);
	} catch (e) {
		console.error(e); // tslint:disable-line
	}
}

export function* getAllFlashCards() {
	yield takeLatest(
		actionTypes.getAllFlashCardsRequestType,
		fetchGetAllFlashCards,
	);
}

export function* createFlashCard() {
	yield takeEvery(actionTypes.createFlashCardRequestType, fetchCreateFlashCard);
}

export function* deleteFlashCard() {
	yield takeEvery(actionTypes.deleteFlashCardRequestType, fetchDeleteFlashCard);
}
