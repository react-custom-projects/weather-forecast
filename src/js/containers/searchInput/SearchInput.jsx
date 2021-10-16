import React, { useState } from 'react';
//styles
import styles from './SearchInput.scss';
//constants
import { history } from '../../constants/Constants';

const SearchInput = () => {
	const [value, setValue] = useState('');

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
			/>
			<button type="submit" className={styles.iconWrapper}>
				<i className="fas fa-search" />
			</button>
		</form>
	);
};

export default SearchInput;
