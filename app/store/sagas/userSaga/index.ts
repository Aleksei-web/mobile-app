import axios, { AxiosPromise, AxiosResponse, AxiosResponseHeaders } from 'axios';
const url = 'https://billing.mosline.ru:8110/api/hydra-service/get-current-service-list?customerId='

import { all, call, put, takeLatest } from "redux-saga/effects";
import { fetchUserFailure, fetchUserSuccess } from '../../actions/user';
import { userTypes } from '../../actionTypes/userTypes';
import { FetchUserRequest, User } from '../../types/user';

const getUser = async(id: string) => {
	return await axios.get<User[]>(url + id);
}

function* fetchUserSaga({payload}:FetchUserRequest){
	try{
		const response: AxiosResponse<User[]> = yield getUser(payload);
		yield put(fetchUserSuccess({
			user: response.data[0]
		}))
	} catch(e){
		yield put(
			fetchUserFailure({error: e.message})
		)
	}
}

function* userSaga(){
	yield all([takeLatest(userTypes.FETCH_USER_REQUEST, fetchUserSaga)])
}

export default userSaga;