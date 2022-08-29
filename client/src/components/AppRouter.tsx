import { Route, Routes, Navigate } from 'react-router-dom';
import { privateRoutes, publicRoutes, RouteNames } from '../router';
import { useSelector } from 'react-redux'; 

const AppRouter = () => {
    const isAuth = useSelector((state: any) => state.auth.isAuth);

    return isAuth ? (
        <Routes>
            {privateRoutes.map((route) => (
                <Route element={ <route.element/> } path={ route.path } key={ route.path } />
            ))}
            <Route path='/*' element={ <Navigate to={RouteNames.HOME} replace /> } />
        </Routes>
    ) : (
        <Routes>
            {publicRoutes.map((route) => (
                <Route element={ <route.element/> } path={ route.path } key={ route.path } />
            ))}
            <Route path='/*' element={ <Navigate to={RouteNames.AUTH} replace /> } />
        </Routes>
    );
};

export default AppRouter;
