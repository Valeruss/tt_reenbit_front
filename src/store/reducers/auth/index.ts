import { AuthAction, AuthActionEnum, AuthState } from "./types";

const initialState: AuthState = {
    isAuth: true,
};

export default function AuthReducer (state = initialState, action: AuthAction): AuthState {
    switch (action.type) {
        case AuthActionEnum.SET_IS_AUTH:
            return { ...state, isAuth: action.payload };
        default:
            return state;
    }
}