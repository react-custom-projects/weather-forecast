//date fns
import format from 'date-fns/format';

export const updateObject = (oldObject, UpdatedValues) => {
	return {
		...oldObject,
		...UpdatedValues,
	};
};

export const constructDayWeatherData = (daydata) => {
	const weather = daydata.weather[0];

	return {
		weekDay: format(new Date(daydata.dt_txt), 'EEEE'),
		todayDate: format(new Date(daydata.dt_txt), 'dd/MM'),
		icon: weather.icon,
		temp: Math.round(daydata.main.temp),
		feelsLike: Math.round(daydata.main.feels_like),
		humidity: daydata.main.humidity,
		wind: Math.round(Number(daydata.wind.speed) * 3.6 * 100) / 100,
	};
};
