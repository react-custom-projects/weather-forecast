import React, { useState } from 'react';
//styles
import styles from './SearchInput.scss';
//constants
import { history } from '../../constants/Constants';
import { useSelector } from 'react-redux';
import { getAppIsFetching } from '../../store/app/selectors/AppSelectors';

const SearchInput = () => {
	const [value, setValue] = useState(''),
		isFetching = useSelector((state) => getAppIsFetching({ state }));

	const searchHandler = ({ target: { value } }) => {
		setValue(value);
	};

	const formHandler = (e) => {
		e.preventDefault();

		history.push({
			pathname: '/',
			search: `?city=${value}`,
		});
		setValue('');
	};

	return (
		<form className={styles.wrapper} onSubmit={formHandler}>
			<input
				value={value}
				onChange={searchHandler}
				type="text"
				className={styles.input}
				placeholder="Search"
				disabled={isFetching}
			/>
			<button disabled={isFetching} type="submit" className={styles.iconWrapper}>
				<i className="fas fa-search" />
			</button>
		</form>
	);
};

export default SearchInput;
