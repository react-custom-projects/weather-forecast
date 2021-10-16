//action types
import {
	SET_CURRENT_CITY_WEATHER_DATA,
	SET_IS_FETCHING_CITY_DATA_FALSE,
	SET_IS_FETCHING_CITY_DATA_TRUE,
} from '../appActionTypes';
//constants
import { updateObject } from '../../../constants/Helpers';

const initialState = {
	isFetching: false,
	cityData: {},
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_IS_FETCHING_CITY_DATA_TRUE: {
			return updateObject(state, { isFetching: true });
		}
		case SET_IS_FETCHING_CITY_DATA_FALSE: {
			return updateObject(state, { isFetching: false });
		}
		case SET_CURRENT_CITY_WEATHER_DATA: {
			return updateObject(state, { cityData: action.data });
		}
		default:
			return state;
	}
};

export default reducer;
