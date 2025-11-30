import axios from 'axios';

declare global {
	interface Window {
		axios: typeof axios;
    }
}

axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
