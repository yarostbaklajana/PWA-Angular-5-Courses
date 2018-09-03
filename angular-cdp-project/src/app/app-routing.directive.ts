import {Routes} from '@angular/router';
import {CoursesComponent} from "./courses/courses.component";
import {LoginComponent} from './login/login.component';

export const appRoutes: Routes = [

  {
    path: 'login', component: LoginComponent
  },
  // {
  //   path: 'course/:id', component: CourseComponent
  // },
  {
    path: 'courses',
    component: CoursesComponent
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
