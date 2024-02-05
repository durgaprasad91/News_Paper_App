import { combineReducers } from 'redux';

// Import your action types
import {
  SET_CULTURE_DATA,
  SET_HEALTH_DATA,
  SET_SCIENCE_DATA,
  SET_SPORTS_DATA,
  SET_TECHNOLOGY_DATA,
} from '../action/action'; // Ensure correct path

// Culture Reducer
const cultureReducer = (state = { cultureData: [] }, action) => {
  switch (action.type) {
    case SET_CULTURE_DATA:
      return {
        ...state,
        cultureData: action.payload,
      };
    default:
      return state;
  }
};

// Health Reducer
const healthReducer = (state = { healthData: [] }, action) => {
  switch (action.type) {
    case SET_HEALTH_DATA:
      return {
        ...state,
        healthData: action.payload,
      };
    default:
      return state;
  }
};

// Science Reducer
const scienceReducer = (state = { scienceData: [] }, action) => {
  switch (action.type) {
    case SET_SCIENCE_DATA:
      return {
        ...state,
        scienceData: action.payload,
      };
    default:
      return state;
  }
};

// Sports Reducer
const sportsReducer = (state = { sportsData: [] }, action) => {
  switch (action.type) {
    case SET_SPORTS_DATA:
      return {
        ...state,
        sportsData: action.payload,
      };
    default:
      return state;
  }
};

// Technology Reducer
const technologyReducer = (state = { techData: [] }, action) => {
  switch (action.type) {
    case SET_TECHNOLOGY_DATA:
      return {
        ...state,
        techData: action.payload,
      };
    default:
      return state;
  }
};

// src/redux/reducers/categoryReducer.js


const rootReducer = combineReducers({
  culture: cultureReducer,
  health: healthReducer,
  science: scienceReducer,
  sports: sportsReducer,
  technology: technologyReducer,
  
});

export default rootReducer;
