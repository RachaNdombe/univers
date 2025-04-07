import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { StudentListeComponent } from './student-liste/student-liste.component';
import { StudentComponent } from './student/student.component';
import { CoursListeComponent } from './cours-liste/cours-liste.component';
import { CoursComponent } from './cours/cours.component';


export const routes: Routes = [

   {
      path: '',
      component: StudentListeComponent
   },
   {
      path: 'voir',
      component: StudentComponent
   },

   {
    path:'register',
    component: RegisterComponent
   },
   {
    path: 'login',
    component: LoginComponent
   },
   { path: '', redirectTo: '/login', pathMatch: 'full' },
   {
      path: 'see',
      component: CoursComponent
   },
   {
      path:'',
      component: CoursListeComponent
   },
   {
      path: '',redirectTo: '/voir',pathMatch: 'full'
   }
   

];
