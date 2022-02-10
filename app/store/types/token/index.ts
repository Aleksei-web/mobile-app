import { tokenTypes } from '../../actionTypes/tokenTypes';

export interface Token {
	token: null | string;
}

export interface SaveTokenPayload {
	token: null | string;
}

export interface SaveToken {
	type: typeof tokenTypes.SAVE_TOKEN_NOTIFICATION;
	payload: SaveTokenPayload;
}

export type TokenActions = SaveToken;
