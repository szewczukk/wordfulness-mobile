import * as actionTypes from '../../constans/actionTypes';
import { Action, FlashCard } from '../../constans/types';

type State = {
	flashCards: FlashCard[];
	getAllErrors: string;
	createErrors: string;
	deleteErrors: string;
};

const initialState: State = {
	flashCards: [],
	getAllErrors: '',
	createErrors: '',
	deleteErrors: '',
};

const reducer = (state = initialState, action: Action) => {
	const { type, payload } = action;

	switch (type) {
		case actionTypes.getAllFlashCardsSuccessType:
			return { ...state, flashCards: payload };
		case actionTypes.getAllFlashCardsErrorType:
			return { ...state, getAllErrors: payload };
		case actionTypes.createFlashCardErrorType:
			return { ...state, createErrors: payload };
		case actionTypes.deleteFlashCardErrorType:
			return { ...state, deleteErrors: payload };
		default:
			return state;
	}
};

export default reducer;
