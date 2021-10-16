import React from 'react';
//styles
import styles from './DayWeather.scss';

const DayWeather = () => (
	<div className={styles.day}>
		<img src="https://openweathermap.org/img/wn/04n.png" alt="" className={styles.icon} />
		<p>Tue</p>
		<p>29°C</p>
	</div>
);

export default DayWeather;
