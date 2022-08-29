import React from 'react';
import Home from '../pages/Home';
import Auth from '../pages/Auth';

export interface IRoute {
    path: string;
    element: React.ElementType;
}

export enum RouteNames {
    HOME = '/',
    AUTH = '/auth',
}

export const publicRoutes: IRoute[] = [
    { path: RouteNames.AUTH, element: Auth },
];

export const privateRoutes: IRoute[] = [
    { path: RouteNames.HOME, element: Home },
];
