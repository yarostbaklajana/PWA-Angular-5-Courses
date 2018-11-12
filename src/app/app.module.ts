import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {HttpClientModule} from '@angular/common/http';
import {MenuItem} from 'primeng/api';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {CoursesComponent} from './courses/courses.component';
import {AddEditCourseComponent} from './add-edit-course/add-edit-course.component';
import {CourseItemComponent} from './courses/course-item/course-item.component';
import {SearchFormComponent} from './courses/search-form/search-form.component';
import {appRoutes} from './app-routing.directive';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';

import { CookieService } from 'ngx-cookie-service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddEditCourseComponent,
    CourseItemComponent,
    SearchFormComponent,
    HeaderComponent,
    FooterComponent,
    CoursesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    BreadcrumbModule,
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true
      }
    ),
    HttpClientModule,
    environment.production ? ServiceWorkerModule.register('ngsw-config.js') : []
  ],
  providers: [
    CookieService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
