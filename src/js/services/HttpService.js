import axios from 'axios';
//toast
import { toast } from 'react-toastify';

const createNewBaseUrl = (url) =>
	axios.create({
		baseURL: url,
	});

const apiService = createNewBaseUrl(process.env.BASE_URL);

const requestInterceptor = (config) => {
	return config;
};

const requestInterceptorError = (error) => {
	console.log('there is a request error', error);
	return Promise.reject(error);
};

const responseInterceptor = (response) => {
	// console.log('response interceptor:', response);
	return response;
};

const responseInterceptorError = (error) => {
	const errorResponse = error.response;
	console.log('response interceptor error:', errorResponse);

	toast.error(errorResponse.data.message);

	return Promise.reject(error);
};

const addInterceptors = (service) => {
	service.interceptors.request.use(requestInterceptor, requestInterceptorError);
	service.interceptors.response.use(responseInterceptor, responseInterceptorError);
};
addInterceptors(apiService);

export { apiService };
