import React, { lazy, Suspense } from 'react';
import { hot } from 'react-hot-loader/root';
import { Route, Switch } from 'react-router-dom';
//toast
import { ToastContainer } from 'react-toastify';
//error boundary
import { ErrorBoundary } from 'react-error-boundary';
//error boundary fallback
import ErrorBoundaryFallback from './js/generic/ErrorBoundaryFallback';
//components
import LoadingIcon from './js/components/shared/loadingIcon/LoadingIcon';
//containers
import NotFoundPage from './js/containers/pages/notFoundPage/NotFoundPage';
const WeatherPage = lazy(() => import('./js/containers/pages/weatherPage/WeatherPage'));

const App = () => (
	<ErrorBoundary
		FallbackComponent={ErrorBoundaryFallback}
		onReset={() => {
			//Reset the state of your app so the error doesn't happen again
			console.log('Try again clicked');
		}}
	>
		<Suspense
			fallback={
				<div className="loader-wrapper">
					<LoadingIcon />
				</div>
			}
		>
			<Switch>
				<Route path="/" render={(routerProps) => <WeatherPage {...routerProps} />} exact />
				<Route path="*" render={(routerProps) => <NotFoundPage {...routerProps} />} />
			</Switch>
		</Suspense>
		<ToastContainer />
	</ErrorBoundary>
);

export default hot(App);
