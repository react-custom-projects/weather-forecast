//action types
import {
	SET_CURRENT_CITY_WEATHER_DATA,
	SET_IS_FETCHING_CITY_DATA_FALSE,
	SET_IS_FETCHING_CITY_DATA_TRUE,
} from '../appActionTypes';
//services
import WeatherService from '../../../services/WeatherService';

const setIsFetchingCityDataTrue = () => ({ type: SET_IS_FETCHING_CITY_DATA_TRUE });

const setIsFetchingCityDataFalse = () => ({ type: SET_IS_FETCHING_CITY_DATA_FALSE });

export const setCurrentCityWeatherData = () => async (dispatch, getState) => {
	const state = getState();

	dispatch(setIsFetchingCityDataTrue());
	try {
		const res = await WeatherService.fetchCityWeather('paris');
		dispatch({ type: SET_CURRENT_CITY_WEATHER_DATA, data: res.data });
		dispatch(setIsFetchingCityDataFalse());
	} catch (err) {
		console.log(err);
		dispatch(setIsFetchingCityDataFalse());
	}
};
