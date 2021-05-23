import { AuthState } from './AuhContext';

type AuthAction =
    | { type: 'signIn' }
    | { type: 'logout' }
    | { type: 'changeFavIcon', payload: string }
    | { type: 'changeUserName', payload: string }



// generaEstado
export const authReducer = (state: AuthState, action: AuthAction): AuthState => {

    switch (action.type) {
        case 'signIn':
            return {
                ...state,
                isLoggedIn: true,
                username: 'no-username-yet'
            }
        case 'logout':
            return {
                ...state,
                isLoggedIn: false,
                username: undefined,
                favouriteIcon: undefined
            }
        case 'changeFavIcon':
            return {
                ...state,
                favouriteIcon: action.payload
            }
        case 'changeUserName':
            return {
                ...state,
                username: action.payload
            }
        default:
            return state;
    }




}