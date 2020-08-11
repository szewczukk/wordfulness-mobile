import * as actionTypes from '../../constans/actionTypes';

export const getAllFlashCardsRequest = () => ({
	type: actionTypes.getAllFlashCardsRequestType,
});

export const getAllFlashCardsSuccess = (payload: any) => ({
	type: actionTypes.getAllFlashCardsSuccessType,
	payload,
});

export const getAllFlashCardsError = (payload: any) => ({
	type: actionTypes.getAllFlashCardsErrorType,
	payload,
});
