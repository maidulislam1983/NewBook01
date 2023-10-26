import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
    {
        path:'login',
        loadComponent:()=>import ('./signup/signup.component').then((com)=> com.SignupComponent)
    },
    {
        path:'user',
        component:UserComponent,
        loadChildren:()=>import ('./user/user.route').then((com)=> com.userMamaRoute)
    }
];
