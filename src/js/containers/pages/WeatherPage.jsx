import React from 'react';
import { useDispatch } from 'react-redux';
//styles
import styles from './WeatherPage.scss';
//custom hooks
import useBoolean from '../../customHooks/UseBoolean';
//components
import CityWeatherDetails from '../../components/cityWeatherDetails/CityWeatherDetails';
import CityOverview from '../../components/cityOverView/CityOverview';

const WeatherPage = () => {
	const dispatch = useDispatch(),
		[isDetails, setIsDetails] = useBoolean(false);

	return (
		<div className="container" style={{ textAlign: 'center' }}>
			{isDetails ? (
				<CityWeatherDetails />
			) : (
				<CityOverview city="Paris, FR" degree={25} status="Rain" />
			)}
			<span className={styles.seeMore} onClick={setIsDetails.toggle}>
				{isDetails ? 'Hide' : 'Show'} details
			</span>
		</div>
	);
};

export default WeatherPage;
