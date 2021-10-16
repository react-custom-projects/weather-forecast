import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
//components
import CityWeatherDetails from '../../components/cityWeatherDetails/CityWeatherDetails';
import CityOverview from '../../components/cityOverView/CityOverview';

const WeatherPage = () => {
	const dispatch = useDispatch(),
		[isDetails, setIsDetails] = useState(false);

	return (
		<div className="container" style={{ textAlign: 'center' }}>
			{isDetails ? <CityWeatherDetails /> : <CityOverview />}
		</div>
	);
};

export default WeatherPage;
