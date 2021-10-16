import React from 'react';
import { useSelector } from 'react-redux';
//styles
import styles from './CityOverview.scss';
//selectors
import { getAppCityData } from '../../store/app/selectors/AppSelectors';

const CityOverview = () => {
	const cityData = useSelector((state) => getAppCityData({ state }));

	return (
		<div
			className={styles.wrapper}
			style={{
				'--background': `url('https://source.unsplash.com/1600x900/?${
					cityData?.cityOverview?.status ?? ''
				}')`,
			}}
		>
			<div>
				<h2 className={styles.day}>{cityData?.cityOverview?.weekDay ?? ''}</h2>
				<div className={styles.date}>{cityData?.cityOverview?.todayDate ?? ''}</div>
				<div className={styles.location}>
					<i className="fas fa-map-marker-alt" />
					<span>{cityData?.cityOverview?.name ?? ''}</span>
				</div>
			</div>
			<div>
				<img
					src={
						cityData?.cityOverview?.icon
							? `https://openweathermap.org/img/wn/${cityData.cityOverview.icon}.png`
							: ''
					}
					alt=""
					className={styles.icon}
					height="90px"
					width="90px"
				/>
				<h1 className={styles.temp}>{cityData?.cityOverview?.temp ?? ''}°C</h1>
				<div className={styles.description}>{cityData?.cityOverview?.statusDescription ?? ''}</div>
			</div>
		</div>
	);
};

export default CityOverview;
