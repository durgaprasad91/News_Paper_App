

import { combineReducers } from 'redux';
import cultureReducer from './reducer/reducerr'; 
import healthReducer from './reducer/reducer';
import scienceReducer from './reducer/reducer';
import sportsReducer from './reducer/reducer';
import technologyReducer from './reducer/reducer';

const rootReducer = combineReducers({
  culture: cultureReducer,
  health: healthReducer,
  science: scienceReducer,
  sports: sportsReducer,
  technology: technologyReducer,
  
});

export default rootReducer;
