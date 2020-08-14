import * as actionTypes from '../../constans/actionTypes';
import { Action, FlashCard } from '../../constans/types';
import { Answer } from '../../constans/enums';

type State = {
	queue: FlashCard[];
	finished: boolean;
	currentFlashCard: FlashCard | undefined;
};

const initialState: State = {
	queue: [],
	finished: false,
	currentFlashCard: undefined,
};

const reducer = (state = initialState, action: Action) => {
	const { type, payload } = action;

	switch (type) {
		case actionTypes.initLearningType:
			for (let i = payload.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[payload[i], payload[j]] = [payload[j], payload[i]];
			}

			const current = payload.shift();

			return { queue: payload, currentFlashCard: current, finished: false };
		case actionTypes.answerType:
			const { answer, id } = payload;

			if (answer === Answer.OK) {
				const { queue } = state;

				const newQueue = state.queue.filter((val) => val._id !== id);
				const newFlashCard = queue.shift();
				const finished = typeof newFlashCard === 'undefined';

				return {
					...state,
					queue: newQueue,
					currentFlashCard: newFlashCard,
					finished,
				};
			} else if (answer === Answer.DONT_KNOW) {
				const { queue, currentFlashCard } = state;

				if (typeof currentFlashCard !== 'undefined') {
					queue.push(currentFlashCard);
				}
				const newFlashCard = queue.shift();

				return {
					...state,
					queue,
					currentFlashCard: newFlashCard,
				};
			}
		default:
			return state;
	}
};

export default reducer;
