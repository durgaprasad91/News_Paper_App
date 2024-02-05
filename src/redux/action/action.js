// src/redux/actions/actions.js

// Culture actions
export const SET_CULTURE_DATA = 'SET_CULTURE_DATA';
export const OTHER_CULTURE_ACTION = 'OTHER_CULTURE_ACTION';

export const setCultureData = (data) => ({
  type: SET_CULTURE_DATA,
  payload: data,
});

export const otherCultureAction = () => ({
  type: OTHER_CULTURE_ACTION,
});

// Health actions
export const SET_HEALTH_DATA = 'SET_HEALTH_DATA';

export const setHealthData = (data) => ({
  type: SET_HEALTH_DATA,
  payload: data,
});

// Science actions
export const SET_SCIENCE_DATA = 'SET_SCIENCE_DATA';

export const setScienceData = (data) => ({
  type: SET_SCIENCE_DATA,
  payload: data,
});

// Sports actions
export const SET_SPORTS_DATA = 'SET_SPORTS_DATA';

export const setSportsData = (data) => ({
  type: SET_SPORTS_DATA,
  payload: data,
});

// Technology actions
export const SET_TECHNOLOGY_DATA = 'SET_TECHNOLOGY_DATA';

export const setTechnologyData = (data) => ({
  type: SET_TECHNOLOGY_DATA,
  payload: data,
});


