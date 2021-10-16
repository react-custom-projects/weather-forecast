import React from 'react';
import PropTypes from 'prop-types';
//styles
import styles from './CityOverview.scss';

const CityOverview = ({ city, degree, status }) => (
	<div
		className={styles.wrapper}
		style={{ '--background': `url('https://source.unsplash.com/1600x900/?${status}')` }}
	>
		<div>
			<h2 className={styles.day}>Tuesday</h2>
			<div className={styles.date}>15 Jan 2019</div>
			<div className={styles.location}>
				<i className="fas fa-map-marker-alt" />
				<span>{city}</span>
			</div>
		</div>
		<div>
			<img
				src="https://openweathermap.org/img/wn/04n.png"
				alt=""
				className={styles.icon}
				height="90px"
				width="90px"
			/>
			<h1 className={styles.temp}>{degree}°C</h1>
			<div className={styles.description}>{status}</div>
		</div>
	</div>
);

CityOverview.proptypes = {
	city: PropTypes.string.isRequired,
	degree: PropTypes.number.isRequired,
	status: PropTypes.string.isRequired,
};

export default CityOverview;
