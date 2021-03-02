import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignCourseToUserComponent } from './components/assign-course-to-user/assign-course-to-user.component';
import { AddCoursesComponent } from './components/add-courses/add-courses.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { FeaturesComponent } from './components/features/features.component';
import { CompanyComponent } from './components/company/company.component';

const routes: Routes = [
  { path: 'assign/:user', component: AssignCourseToUserComponent },
  { path: 'addCourses', component: AddCoursesComponent },
  { path: 'showAllCourses', component: DataTableComponent },
  { path: 'login', component: LoginComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'Company', component: CompanyComponent },
  { path: '', redirectTo: '/showAllCourses', pathMatch: 'full'  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
