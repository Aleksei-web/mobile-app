import { userTypes } from '../../actionTypes/userTypes';
import { User, UserState } from '../../types/user';
import { UserActions } from '../../types/user';

const initialState: UserState = {
	pending: false,
	user: null,
	error: null,
};

export default (state = initialState, action: UserActions) => {
	switch (action.type) {
		case userTypes.FETCH_USER_REQUEST:
			return {
				...state,
				pending: true,
			};
		case userTypes.FETCH_USER_SUCCESS:
			return {
				...state,
				pending: false,
				user: { ...action.payload.user },
				error: null,
			};
		case userTypes.FETCH_USER_FAILURE:
			return {
				...state,
				pending: false,
				error: action.payload.error,
			};
		default:
			return {
				...state,
			};
	}
};
