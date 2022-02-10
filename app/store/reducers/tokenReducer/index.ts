import { tokenTypes } from '../../actionTypes/tokenTypes';
import { TokenActions } from '../../types/token';

const initialState = {
	token: null,
};

export default (state = initialState, action: TokenActions) => {
	switch (action.type) {
		case tokenTypes.SAVE_TOKEN_NOTIFICATION:
			return {
				...state,
				token: action.payload,
			};
		default:
			return {
				...state,
			};
	}
};
