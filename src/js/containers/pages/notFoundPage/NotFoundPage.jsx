import React from 'react';
import { Link } from 'react-router-dom';
//styles
import styles from './NotFoundPage.scss';

const NotFoundPage = () => {
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>404</h1>
			<p className={styles.info}>Oops! Something is wrong.</p>
			<Link to="/" className={styles.goBack}>
				Go back to home page.
			</Link>
		</div>
	);
};

export default NotFoundPage;
