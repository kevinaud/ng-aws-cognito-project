import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, NoPreloading } from '@angular/router';

import { BehaviorSubject } from "rxjs/BehaviorSubject";

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
    },
    {
        path: 'login',
        loadChildren: './login/login.module#LoginModule'
    },
    {
        path: 'profile',
        loadChildren: './profile/profile.module#ProfileModule'
    },
    {
        path: 'sign-up',
        loadChildren: './sign-up/sign-up.module#SignUpModule'
    }
];

export const appNavLocations: NavLocation[] = [
    {
        title: 'Home',
        route: '/home',
        authenticated: true,
        unauthenticated: true,
        $display: new BehaviorSubject(true)
    },
    {
        title: 'Login',
        route: '/login',
        authenticated: false,
        unauthenticated: true,
        $display: new BehaviorSubject(true)
    },
    {
        title: 'Sign Up',
        route: '/sign-up',
        authenticated: false,
        unauthenticated: true,
        $display: new BehaviorSubject(true)
    },
    {
        title: 'Profile',
        route: '/profile',
        authenticated: true,
        unauthenticated: false,
        $display: new BehaviorSubject(false)
    }
];

export interface NavLocation {
    title: string;
    route: string;
    authenticated: boolean;
    unauthenticated: boolean;
    $display: BehaviorSubject<any>;
}

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash: true, preloadingStrategy: NoPreloading});
