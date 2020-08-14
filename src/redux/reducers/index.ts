import { combineReducers } from 'redux';

import flashCardReducer from './flashcard';
import learningReducer from './learning';

export default combineReducers({
	flashCards: flashCardReducer,
	learning: learningReducer,
});
