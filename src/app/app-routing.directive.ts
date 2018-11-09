import {Routes} from '@angular/router';
import {CoursesComponent} from "./courses/courses.component";
import {LoginComponent} from './login/login.component';
import {OnlyAuthorizedUserAllowedGuardService} from './only-authorized-user-allowed-guard.service';

export const appRoutes: Routes = [

  {
    path: 'login', component: LoginComponent
  },
  // {
  //   path: 'course/:id', component: CourseComponent
  // },
  {
    path: 'courses',
    component: CoursesComponent,
    canActivate: [OnlyAuthorizedUserAllowedGuardService],
  },
  {
    path: '',
    redirectTo: '/courses',
    pathMatch: 'full'
  },
  // {
  //   path: '**',
  //   component: PageNotFoundComponent
  // }
];
