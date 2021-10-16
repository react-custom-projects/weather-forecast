//date fns
import format from 'date-fns/format';
//action types
import {
	SET_CURRENT_CITY_WEATHER_DATA,
	SET_IS_FETCHING_CITY_DATA_FALSE,
	SET_IS_FETCHING_CITY_DATA_TRUE,
} from '../appActionTypes';
//services
import WeatherService from '../../../services/WeatherService';
//constants
import { constructDayWeatherData } from '../../../constants/Helpers';

const setIsFetchingCityDataTrue = () => ({ type: SET_IS_FETCHING_CITY_DATA_TRUE });

const setIsFetchingCityDataFalse = () => ({ type: SET_IS_FETCHING_CITY_DATA_FALSE });

const setCurrentCityWeatherData = (data) => ({ type: SET_CURRENT_CITY_WEATHER_DATA, data });

export const fetchCurrentCityWeatherData = (city) => async (dispatch) => {
	dispatch(setIsFetchingCityDataTrue());
	try {
		const res = await WeatherService.fetchCityWeather(city),
			data = res.data,
			day1Data = data.list[0],
			day1Weather = day1Data.weather[0],
			day2Data = data.list[7],
			day3Data = data.list[15],
			day4Data = data.list[23],
			payload = {
				cityOverview: {
					name: `${data.city.name}, ${data.city.country}`,
					status: day1Weather.main === 'Clear' ? 'Sun' : day1Weather.main,
					statusDescription: day1Weather.description,
					weekDay: format(new Date(day1Data.dt_txt), 'EEEE'),
					todayDate: format(new Date(day1Data.dt_txt), 'yyyy MMMM dd'),
					icon: day1Weather.icon,
					temp: Math.round(day1Data.main.temp),
				},
				days: [
					constructDayWeatherData(day1Data),
					constructDayWeatherData(day2Data),
					constructDayWeatherData(day3Data),
					constructDayWeatherData(day4Data),
				],
			};

		dispatch(setCurrentCityWeatherData(payload));
		dispatch(setIsFetchingCityDataFalse());
	} catch (err) {
		console.log(err);
		dispatch(setIsFetchingCityDataFalse());
		dispatch(setCurrentCityWeatherData({}));
	}
};
