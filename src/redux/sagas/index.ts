import { all, fork } from 'redux-saga/effects';

import { getAllFlashCards } from './flashcard';

export default function* () {
	yield all([fork(getAllFlashCards)]);
}
