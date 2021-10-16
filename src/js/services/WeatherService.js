import { apiService } from './HttpService';
//constants
import { getFetchCityWeatherUrl } from '../constants/ApiUrls';

class WeatherService {
	static fetchCityWeather(city) {
		return apiService({
			method: 'GET',
			url: getFetchCityWeatherUrl(),
			params: {
				q: city,
				units: 'metric',
				appid: process.env.API_KEY,
			},
		});
	}
}

export default WeatherService;
