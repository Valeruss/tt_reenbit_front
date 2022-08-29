export interface AuthState {
    isAuth: Boolean;
};

export enum AuthActionEnum {
    SET_IS_AUTH = 'SET_IS_AUTH',
};

export interface SetIsAuthAction {
    type: AuthActionEnum.SET_IS_AUTH;
    payload: Boolean;
};

export type AuthAction = 
    SetIsAuthAction;