import axios, {
	AxiosPromise,
	AxiosResponse,
	AxiosResponseHeaders,
} from 'axios';

export const api = axios.create({
	baseURL: 'https://send-notificator-server.herokuapp.com',
});

import { all, call, put, takeLatest } from 'redux-saga/effects';
import { fetchUserFailure, fetchUserSuccess } from '../../actions/user';
import { userTypes } from '../../actionTypes/userTypes';
import { FetchUserRequest, User } from '../../types/user';

type LoginData = {
	password: string;
	login: string;
	token: string;
};

const getUser = async ({ password, login, token }: LoginData) => {
	console.log('url + id', password, login, token);

	return await api.post<{ login: string }>('/login', {
		password,
		login,
		token,
	});
};

function* fetchUserSaga({ payload }: FetchUserRequest) {
	try {
		const response: AxiosResponse<{ login: string }> = yield getUser(payload);
		console.log(response.data.user, 'asd response');

		if (response.data) {
			yield put(
				fetchUserSuccess({
					user: { ...response.data.user},
				})
			);
		}
	} catch (e) {
		console.log('eror', e);
		yield put(fetchUserFailure({ error: 'Ошибка авторизации' }));
	}
}

function* userSaga() {
	yield all([takeLatest(userTypes.FETCH_USER_REQUEST, fetchUserSaga)]);
}

export default userSaga;
