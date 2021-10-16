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

export const convertQueryStringIntoObject = (query) => {
	const criteria = query.split('$');
	return criteria.reduce((acc, el, i) => {
		const [key, val] = el.split('=');
		let criteriaKey = key;
		if (i === 0) {
			criteriaKey = key.substr(1);
		}

		return { ...acc, [criteriaKey]: val };
	}, {});
};
