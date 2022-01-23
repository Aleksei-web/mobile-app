import { userTypes } from "../../actionTypes/userTypes";
import { 
	FetchUserFailure,
	FetchUserSuccess,
	FetchUserFailurePayload,
	FetchUserRequest,
	FetchUserSuccessPayload,
} from "../../types/user"; 

export const fetchUserRequest = (payload: string): FetchUserRequest => ({
	type: userTypes.FETCH_USER_REQUEST,
	payload
})

export const fetchUserSuccess = (
	payload: FetchUserSuccessPayload
): FetchUserSuccess => ({
	type: userTypes.FETCH_USER_SUCCESS,
	payload
})

export const fetchUserFailure = (
	payload: FetchUserFailurePayload
): FetchUserFailure => ({
	type: userTypes.FETCH_USER_FAILURE,
	payload
})