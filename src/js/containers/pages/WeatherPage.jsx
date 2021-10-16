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
import { convertQueryStringIntoObject } from '../../constants/Helpers';
//components
import CityOverview from '../../components/cityOverView/CityOverview';
import LoadingIcon from '../../components/shared/loadingIcon/LoadingIcon';
//containers
import CityWeatherDetails from '../cityWeatherDetails/CityWeatherDetails';
import SearchInput from '../searchInput/SearchInput';

const WeatherPage = ({
	history: {
		location: { search },
	},
}) => {
	const dispatch = useDispatch(),
		[isDetails, setIsDetails] = useBoolean(false),
		isFetching = useSelector((state) => getAppIsFetching({ state }));

	useEffect(() => {
		if (search) {
			const params = convertQueryStringIntoObject(search);
			dispatch(setCurrentCityWeatherData(params.city));
		} else {
			dispatch(setCurrentCityWeatherData('berlin'));
		}
	}, [dispatch, search]);

	return (
		<div className="container" style={{ textAlign: 'center' }}>
			<SearchInput />
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
