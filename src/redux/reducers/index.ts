import { combineReducers } from 'redux';

import flashCardReducer from './flashcard';

export default combineReducers({ flashCards: flashCardReducer });
