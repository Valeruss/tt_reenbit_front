import { useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { AuthActionCreators } from '../../store/reducers/auth/action-creators';
import { RouteNames } from '../../router';
import { useNavigate } from 'react-router-dom';
import { firebaseConfig } from './config';
import './Auth.scss';

const Auth = () => {
    // const dispatch = useDispatch();

    // initializeApp(firebaseConfig);

    // const auth = getAuth();
    // const router = useNavigate();

    // useEffect(() => {
    //     AuthCheck();
    // }, [ auth ]);

    // const AuthCheck = onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //         dispatch(AuthActionCreators.setIsAuth(true));
    //         router(RouteNames.HOME)
    //     }
    // });

    // const singInWithGoogle = async () => {
    //     signInWithPopup(auth, new GoogleAuthProvider())
    //         .then(response => {
    //             console.log(response.user.uid);
    //             dispatch(AuthActionCreators.setIsAuth(true));
    //             router(RouteNames.HOME)
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // };


    return (
        <div className='auth-container'>
            <div className='methods'>
                <div 
                    className='methods-google'
                    // onClick={() => singInWithGoogle()}    
                >Auth with Google</div>
            </div>
        </div>
    );
};

export default Auth;
