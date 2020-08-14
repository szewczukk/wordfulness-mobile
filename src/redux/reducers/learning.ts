import * as actionTypes from '../../constans/actionTypes';
import { Action, FlashCard } from '../../constans/types';
import { Answer } from '../../constans/enums';

const initialState = {
	queue: [],
	finished: false,
	currentFlashCard: undefined,
};

type State = {
	queue: FlashCard[];
	finished: boolean;
	currentFlashCard: FlashCard | undefined;
};

const reducer = (state: State = initialState, action: Action): State => {
	const { type, payload } = action;

	switch (type) {
		case actionTypes.initLearningType:
			const allCards = [...payload];

			for (let i = allCards.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[allCards[i], allCards[j]] = [allCards[j], allCards[i]];
			}

			const current = allCards.shift();

			return { queue: allCards, currentFlashCard: current, finished: false };
		case actionTypes.answerType:
			const { answer, id } = payload;

			if (answer === Answer.OK) {
				const queue = state.queue.filter((val) => val._id !== id);

				const newFlashCard = queue.shift();
				const finished = typeof newFlashCard === 'undefined';

				return {
					...state,
					queue,
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
			} else {
				return state;
			}
		default:
			return state;
	}
};

export default reducer;
