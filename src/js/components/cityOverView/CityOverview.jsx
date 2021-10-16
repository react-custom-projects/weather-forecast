import React from 'react';
import { useSelector } from 'react-redux';
//lodash
import { isEmpty } from 'lodash';
//date fns
import format from 'date-fns/format';
//styles
import styles from './CityOverview.scss';
//selectors
import { getAppCityData } from '../../store/app/selectors/AppSelectors';

const CityOverview = () => {
	const cityData = useSelector((state) => getAppCityData({ state })),
		cityLabel = !isEmpty(cityData) ? `${cityData.city.name}, ${cityData.city.country}` : '',
		todayData = !isEmpty(cityData) ? cityData.list[0] : {};
	let status = '',
		statusDescription = '',
		weekDay = '',
		todayDate = '',
		icon = '',
		temp = '';

	if (!isEmpty(todayData)) {
		const weather = todayData.weather[0];

		status = weather.main === 'Clear' ? 'Sun' : weather.main;
		statusDescription = weather.description;
		weekDay = format(new Date(todayData.dt_txt), 'EEEE');
		todayDate = format(new Date(todayData.dt_txt), 'yyyy MMMM dd');
		icon = weather.icon;
		temp = Math.round(todayData.main.temp);
	}

	return (
		<div
			className={styles.wrapper}
			style={{
				'--background': `url('https://source.unsplash.com/1600x900/?${status}')`,
			}}
		>
			<div>
				<h2 className={styles.day}>{weekDay}</h2>
				<div className={styles.date}>{todayDate}</div>
				<div className={styles.location}>
					<i className="fas fa-map-marker-alt" />
					<span>{cityLabel}</span>
				</div>
			</div>
			<div>
				<img
					src={icon ? `https://openweathermap.org/img/wn/${icon}.png` : ''}
					alt=""
					className={styles.icon}
					height="90px"
					width="90px"
				/>
				<h1 className={styles.temp}>{temp}°C</h1>
				<div className={styles.description}>{statusDescription}</div>
			</div>
		</div>
	);
};

export default CityOverview;
