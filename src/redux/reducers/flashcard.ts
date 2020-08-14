import * as actionTypes from '../../constans/actionTypes';
import { Action, FlashCard } from '../../constans/types';

const initialState = {
	flashCards: [],
	getAllErrors: '',
	createErrors: '',
};

type State = {
	flashCards: FlashCard[];
	getAllErrors: string;
	createErrors: string;
};

const reducer = (state: State = initialState, action: Action): State => {
	const { type, payload } = action;

	switch (type) {
		case actionTypes.getAllFlashCardsSuccessType:
			return { ...state, flashCards: payload };
		case actionTypes.getAllFlashCardsErrorType:
			return { ...state, getAllErrors: payload };
		case actionTypes.createFlashCardErrorType:
			return { ...state, createErrors: payload };
		default:
			return state;
	}
};

export default reducer;
