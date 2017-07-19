import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule, NoPreloading} from '@angular/router';


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

export const appNavLocations = [
    {
        title: 'Home',
        route: '/home'
    },
    {
        title: 'Login',
        route: '/login'
    },
    {
        title: 'Profile',
        route: '/profile'
    },
    {
        title: 'Sign Up',
        route: '/sign-up'
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash: true, preloadingStrategy: NoPreloading});
