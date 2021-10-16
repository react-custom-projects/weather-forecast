import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//lodash
import { isEmpty } from 'lodash';
//styles
import styles from './WeatherPage.scss';
//actions
import { fetchCurrentCityWeatherData } from '../../../store/app/actions/AppActions';
//selectors
import { getAppCityData, getAppIsFetching } from '../../../store/app/selectors/AppSelectors';
//custom hooks
import useBoolean from '../../../customHooks/UseBoolean';
//constants
import { convertQueryStringIntoObject } from '../../../constants/Helpers';
//components
import CityOverview from '../../../components/cityOverView/CityOverview';
import LoadingIcon from '../../../components/shared/loadingIcon/LoadingIcon';
//containers
import CityWeatherDetails from '../../cityWeatherDetails/CityWeatherDetails';
import SearchInput from '../../searchInput/SearchInput';

const WeatherPage = ({
	history: {
		location: { search },
	},
}) => {
	const dispatch = useDispatch(),
		[isDetails, setIsDetails] = useBoolean(false),
		cityData = useSelector((state) => getAppCityData({ state })),
		isFetching = useSelector((state) => getAppIsFetching({ state }));

	useEffect(() => {
		if (search) {
			const params = convertQueryStringIntoObject(search);
			dispatch(fetchCurrentCityWeatherData(params.city));
		} else {
			dispatch(fetchCurrentCityWeatherData('berlin'));
		}
	}, [dispatch, search]);

	return (
		<div className="container" style={{ textAlign: 'center' }}>
			<SearchInput />
			{isFetching && <LoadingIcon />}
			{!isFetching && isEmpty(cityData) && <span>No data found. Try using the search.</span>}
			{!isEmpty(cityData) && !isFetching && (
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
