import { AuthActionEnum, SetIsAuthAction } from "./types";

export const AuthActionCreators = {
    setIsAuth: (payload: Boolean): SetIsAuthAction => ({
        type: AuthActionEnum.SET_IS_AUTH,
        payload,
    })
};