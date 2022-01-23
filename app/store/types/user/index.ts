import { userTypes } from "../../actionTypes/userTypes";

export interface User {
  n_line_id: number;
  n_charge_log_id: number;
  n_service_id: number;
  vc_service_name: string;
  n_parent_service_id?: null;
  n_account_id: number;
  n_equipment_id: number;
  vc_equipment_address?: null;
  vc_equipment_code: string;
  n_subscription_id: number;
  n_par_subscription_id?: string | null;
  n_contract_id: number;
  n_service_state_id: number;
  vc_service_state_name: string;
  n_par_line_id?: string | null;
  n_customer_id: number;
  d_subscription_begin: string;
  d_subscription_end?: string | null;
  n_price: number;
  n_currency_id: number;
  vc_currency_code: string;
  n_traffic_quantity?: string | null;
  n_traffic_unit_id: number;
  n_amount: number;
  n_base_amount: number;
  n_amount_total: number;
  n_base_amount_total: number;
  n_duration_value: number;
  n_duration_unit_id: number;
  n_providing_type_id: number;
  n_discount_id?: string | null;
  vc_discount_name?: string | null;
  n_serv_type_id: string | number;
  immutable: boolean;
}


export interface UserState {
	pending: boolean
	user: User | null
	error: string | null
}

export interface FetchUserSuccessPayload {
	user: User
};

export interface FetchUserFailurePayload {
	error: string
};

export interface FetchUserRequest {
	type: typeof userTypes.FETCH_USER_REQUEST
  payload: string
}

export interface FetchUserSuccess {
	type: typeof userTypes.FETCH_USER_SUCCESS;
	payload: FetchUserSuccessPayload
}

export interface FetchUserFailure {
	type: typeof userTypes.FETCH_USER_FAILURE;
	payload: FetchUserFailurePayload
}

export type UserActions = 
	| FetchUserRequest
	| FetchUserSuccess
	| FetchUserFailure