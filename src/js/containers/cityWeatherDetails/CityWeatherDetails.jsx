import React, { useState } from 'react';
import { useSelector } from 'react-redux';
//styles
import styles from './CityWeatherDetails.scss';
//selectors
import { getAppCityData } from '../../store/app/selectors/AppSelectors';
//components
import DayWeather from '../../components/dayWeather/DayWeather';

const CityWeatherDetails = () => {
	const cityData = useSelector((state) => getAppCityData({ state })),
		[activeIndex, setActiveIndex] = useState(0),
		[todayData, setTodayData] = useState(cityData.days[0]);

	const getRequiredDayData = (i) => {
		setActiveIndex(i);
		setTodayData(cityData.days[activeIndex]);
	};

	return (
		<div className={styles.wrapper}>
			<p className={styles.day}>
				{todayData.weekDay} {todayData.todayDate}
			</p>
			<table className={styles.weatherData} cellPadding="4">
				<tbody>
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
				</tbody>
			</table>

			<div className={styles.daysWrapper}>
				{cityData.days.map((el, i) => (
					<DayWeather
						key={i}
						dayData={el}
						click={getRequiredDayData}
						index={i}
						activeIndex={activeIndex}
					/>
				))}
			</div>
		</div>
	);
};

export default CityWeatherDetails;
