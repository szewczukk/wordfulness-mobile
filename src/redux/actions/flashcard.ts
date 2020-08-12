import * as actionTypes from '../../constans/actionTypes';

export const getAllFlashCardsRequest = () => ({
	type: actionTypes.getAllFlashCardsRequestType,
});

export const createFlashCardRequest = (payload: any) => ({
	type: actionTypes.createFlashCardRequestType,
	payload,
});

export const deleteFlashCardRequest = (payload: any) => ({
	type: actionTypes.deleteFlashCardRequestType,
	payload,
});

export const getAllFlashCardsSuccess = (payload: any) => ({
	type: actionTypes.getAllFlashCardsSuccessType,
	payload,
});

export const getAllFlashCardsError = (payload: any) => ({
	type: actionTypes.getAllFlashCardsErrorType,
	payload,
});

export const createFlashCardsError = (payload: any) => ({
	type: actionTypes.createFlashCardErrorType,
	payload,
});
