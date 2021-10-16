import React from 'react';
import PropTypes from 'prop-types';
//styles
import styles from './CityOverview.scss';

const CityOverview = ({ city, degree, status }) => {
	let imageSrc = '';

	switch (status) {
		case 'Clouds':
			imageSrc =
				'https://images.unsplash.com/photo-1515890922410-ae767899d6b3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=430&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2xvdWRzfHx8fHx8MTYzNDM3NTkwOA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400';
			break;
		case 'Clear':
			imageSrc =
				'https://images.unsplash.com/photo-1504386106331-3e4e71712b38?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=430&ixid=MnwxfDB8MXxyYW5kb218MHx8c3VufHx8fHx8MTYzNDM3NTk3NA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400';
			break;
		case 'Rain':
			imageSrc =
				'https://images.unsplash.com/photo-1517398629-9d24ea1f4f94?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=430&ixid=MnwxfDB8MXxyYW5kb218MHx8cmFpbnx8fHx8fDE2MzQzNzYwOTg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400';
			break;
		default:
			imageSrc = `https://source.unsplash.com/400x430/?${status}`;
	}
	return (
		<div
			className={styles.wrapper}
			style={{ backgroundImage: `url(${imageSrc})`, color: status === 'Rain' ? 'white' : '' }}
		>
			<div>
				<h2 className={styles.day}>Tuesday</h2>
				<div className={styles.date}>15 Jan 2019</div>
				<div className={styles.location}>
					<i className="fas fa-map-marker-alt" />
					<span>{city}</span>
				</div>
			</div>
			<div style={{ color: status === 'Clear' ? 'white' : '' }}>
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
};

CityOverview.proptypes = {
	city: PropTypes.string.isRequired,
	degree: PropTypes.number.isRequired,
	status: PropTypes.string.isRequired,
};

export default CityOverview;
