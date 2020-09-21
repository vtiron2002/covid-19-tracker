import {
  SET_COUNTRIES,
  CHANGE_COUNTRY,
  GET_CARDS_DATA,
  SET_LINE_CHART_DATA,
  SET_MAP_CENTER,
  CHANGE_SELECTED_CARD,
  RESET_MAP,
} from './types';

import initialState from './initialState';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_COUNTRIES:
      return { ...state, countries: action.payload };
    case CHANGE_COUNTRY:
      return { ...state, country: action.payload };
    case GET_CARDS_DATA:
      return { ...state, cardsData: action.payload };
    case SET_LINE_CHART_DATA:
      return { ...state, lineChartData: action.payload };
    case SET_MAP_CENTER:
      return { ...state, mapCenter: action.payload, mapZoom: 3 };
    case CHANGE_SELECTED_CARD:
      return { ...state, selectedCard: action.payload };
    case RESET_MAP:
      return {
        ...state,
        mapCenter: initialState.mapCenter,
        mapZoom: initialState.mapZoom,
      };
    default:
      return state;
  }
};

export default reducer;
