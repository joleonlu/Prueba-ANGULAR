import { NgModule, TestabilityRegistry } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';


const  routes: Routes = [
  
  {
    path: '',
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'registration',
        component: RegistrationComponent
      },

      {
        path: '**',
        redirectTo: 'login'
      }
    ]
  }
]

@NgModule({
    imports: [
      RouterModule.forChild( routes )

  ],
   exports: [
    RouterModule
   ]
})
export class AuthRoutingModule { }
