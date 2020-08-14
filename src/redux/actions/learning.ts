import * as actionTypes from '../../constans/actionTypes';

export const initLearning = (payload: any) => ({
	type: actionTypes.initLearningType,
	payload,
});

export const answer = (payload: any) => ({
	type: actionTypes.answerType,
	payload,
});
