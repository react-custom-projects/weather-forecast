import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//styles
import styles from './WeatherPage.scss';
//actions
import { setCurrentCityWeatherData } from '../../store/app/actions/AppActions';
//selectors
import { getAppIsFetching } from '../../store/app/selectors/AppSelectors';
//custom hooks
import useBoolean from '../../customHooks/UseBoolean';
//constants
import { history } from '../../constants/Constants';
//components
import CityWeatherDetails from '../cityWeatherDetails/CityWeatherDetails';
import CityOverview from '../../components/cityOverView/CityOverview';
import LoadingIcon from '../../components/shared/loadingIcon/LoadingIcon';

const WeatherPage = () => {
	const dispatch = useDispatch(),
		[isDetails, setIsDetails] = useBoolean(false),
		isFetching = useSelector((state) => getAppIsFetching({ state }));

	useEffect(() => {
		dispatch(setCurrentCityWeatherData());
	}, [dispatch, history.location.search]);

	return (
		<div className="container" style={{ textAlign: 'center' }}>
			{isFetching ? (
				<LoadingIcon />
			) : (
				<>
					{isDetails ? <CityWeatherDetails /> : <CityOverview />}
					<span className={styles.seeMore} onClick={setIsDetails.toggle}>
						{isDetails ? 'Hide' : 'Show'} details
					</span>
				</>
			)}
		</div>
	);
};

export default WeatherPage;
