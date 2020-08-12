import { all, fork } from 'redux-saga/effects';

import {
	getAllFlashCards,
	createFlashCard,
	deleteFlashCard,
} from './flashcard';

export default function* () {
	yield all([
		fork(getAllFlashCards),
		fork(createFlashCard),
		fork(deleteFlashCard),
	]);
}
