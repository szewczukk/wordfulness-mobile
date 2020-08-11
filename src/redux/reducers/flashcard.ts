import * as actionTypes from '../../constans/actionTypes';

const initialState = {
	flashCards: [],
	getAllErrors: '',
	createErrors: '',
};

const reducer = (
	state = initialState,
	action: { type: string; payload: any },
) => {
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
