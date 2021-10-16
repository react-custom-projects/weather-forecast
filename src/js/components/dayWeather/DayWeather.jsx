import React from 'react';
//styles
import styles from './DayWeather.scss';

const DayWeather = ({ dayData, click, index, activeIndex }) => (
	<div
		className={`${styles.day} ${index === activeIndex ? styles.active : ''}`}
		onClick={() => click(index)}
	>
		<img
			src={`https://openweathermap.org/img/wn/${dayData.icon}.png`}
			alt=""
			className={styles.icon}
		/>
		<p>{dayData.todayDate}</p>
		<p>{dayData.weekDay.substring(0, 3)}</p>
		<p>{dayData.temp}°C</p>
	</div>
);

export default DayWeather;
