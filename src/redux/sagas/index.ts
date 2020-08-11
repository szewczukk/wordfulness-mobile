import { all, fork } from 'redux-saga/effects';

import { getAllFlashCards, createFlashCard } from './flashcard';

export default function* () {
	yield all([fork(getAllFlashCards), fork(createFlashCard)]);
}
