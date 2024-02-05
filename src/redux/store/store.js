

import { createStore, combineReducers } from 'redux';
import cultureReducer from '../reducer/reducer';
import healthReducer from '../reducer/reducer';
import scienceReducer from '../reducer/reducer';
import sportsReducer from '../reducer/reducer';
import technologyReducer from '../reducer/reducer';

const rootReducer = combineReducers({
  culture: cultureReducer,
  health: healthReducer,
  science: scienceReducer,
  sports: sportsReducer,
  technology: technologyReducer,
});

const store = createStore(rootReducer);

export default store;
