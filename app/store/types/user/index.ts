import { userTypes } from '../../actionTypes/userTypes';

export interface User {
	login: string;
	
}

export interface UserState {
	pending: boolean;
	user: User | null;
	error: string | null;
}

export interface FetchUserSuccessPayload {
	user: User;
}

export interface FetchUserFailurePayload {
	error: string;
}

export interface FetchUserRequest {
	type: typeof userTypes.FETCH_USER_REQUEST;
	payload: { login: string; password: string; token: string };
}

export interface FetchUserSuccess {
	type: typeof userTypes.FETCH_USER_SUCCESS;
	payload: FetchUserSuccessPayload;
}

export interface FetchUserFailure {
	type: typeof userTypes.FETCH_USER_FAILURE;
	payload: FetchUserFailurePayload;
}

export type UserActions =
	| FetchUserRequest
	| FetchUserSuccess
	| FetchUserFailure;
