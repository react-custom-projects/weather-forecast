import React from 'react';
import { useSelector } from 'react-redux';
//styles
import styles from './CityWeatherDetails.scss';
//selectors
import { getAppCityData } from '../../store/app/selectors/AppSelectors';

const CityWeatherDetails = () => {
	const cityData = useSelector((state) => getAppCityData({ state }));

	return (
		<div className={styles.wrapper}>
			<table className={styles.weatherData} cellPadding="4">
				<tr>
					<td>PRECIPITATION</td>
					<td>0 %</td>
				</tr>
				<tr>
					<td>HUMIDITY</td>
					<td>34 %</td>
				</tr>
				<tr>
					<td>WIND</td>
					<td>0 km/h</td>
				</tr>
			</table>

			<div className={styles.daysWrapper}>
				<div className="Days One">
					<img src="https://openweathermap.org/img/wn/04n.png" alt="" className="icon" />
					<p id="d1">Tue</p>
					<p id="t1">29°C</p>
				</div>
				<div className="Days Two">
					<img src="https://openweathermap.org/img/wn/04n.png" alt="" className="icon" />
					<p id="d2">Wed</p>
					<p id="t2">21°C</p>
				</div>
				<div className="Days Three">
					<img src="https://openweathermap.org/img/wn/04n.png" alt="" className="icon" />
					<p id="d3">Thur</p>
					<p id="t3">8°C</p>
				</div>
				<div className="Days Four">
					<img src="https://openweathermap.org/img/wn/04n.png" alt="" className="icon" />
					<p id="d4">Fri</p>
					<p id="t4">19°C</p>
				</div>
			</div>
		</div>
	);
};

export default CityWeatherDetails;
