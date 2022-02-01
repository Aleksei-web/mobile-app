import axios, { AxiosPromise, AxiosResponse, AxiosResponseHeaders } from 'axios';
const url = 'https://billing.mosline.ru:8110/api/hydra-service/get-current-service-list?customerId='

import { all, call, put, takeLatest } from "redux-saga/effects";
import { fetchUserFailure, fetchUserSuccess } from '../../actions/user';
import { userTypes } from '../../actionTypes/userTypes';
import { FetchUserRequest, User } from '../../types/user';

const getUser = async(id: string) => {
	console.log('url + id', url + id);
	
	return await axios.get<User[]>('https://jsonplaceholder.typicode.com/users/1');
}

function* fetchUserSaga({payload}:FetchUserRequest){
	try{
		const response: AxiosResponse<User> = yield getUser(payload);
		console.log('response.data[0]', response.data);
		
		yield put(fetchUserSuccess({
			user: response.data
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