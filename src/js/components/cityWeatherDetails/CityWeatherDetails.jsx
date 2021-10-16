import React, { useState } from 'react';
import { useSelector } from 'react-redux';
//styles
import styles from './CityWeatherDetails.scss';
//selectors
import { getAppCityData } from '../../store/app/selectors/AppSelectors';
//components
import DayWeather from '../dayWeather/DayWeather';

const CityWeatherDetails = () => {
	const cityData = useSelector((state) => getAppCityData({ state })),
		[todayData, setTodayData] = useState(cityData.days[0]);

	const getRequiredDayData = (i) => {
		setTodayData(cityData.days[i]);
	};

	return (
		<div className={styles.wrapper}>
			<p>
				{todayData.weekDay} {todayData.todayDate}
			</p>
			<table className={styles.weatherData} cellPadding="4">
				<tr>
					<td>Feels lik:</td>
					<td>{todayData.feelsLike} %</td>
				</tr>
				<tr>
					<td>Humidity:</td>
					<td>{todayData.humidity} %</td>
				</tr>
				<tr>
					<td>Wind:</td>
					<td>{todayData.wind} km/h</td>
				</tr>
			</table>

			<div className={styles.daysWrapper}>
				{cityData.days.map((el, i) => (
					<DayWeather key={i} dayData={el} click={getRequiredDayData} index={i} />
				))}
			</div>
		</div>
	);
};

export default CityWeatherDetails;
