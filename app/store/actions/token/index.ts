import { tokenTypes } from '../../actionTypes/tokenTypes';
import { SaveToken, SaveTokenPayload } from '../../types/token';

export const saveToken = (payload: SaveTokenPayload): SaveToken => ({
	type: tokenTypes.SAVE_TOKEN_NOTIFICATION,
	payload,
});
