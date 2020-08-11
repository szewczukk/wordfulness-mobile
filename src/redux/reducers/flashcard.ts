import * as actionTypes from '../../constans/actionTypes';

const initialState = {
	flashCards: [],
	error: {
		stringified: '',
	},
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
			return { ...state, error: payload };
		default:
			return state;
	}
};

export default reducer;
