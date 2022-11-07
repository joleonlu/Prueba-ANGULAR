import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorpageComponent } from './shared/errorpage/errorpage.component';

const routes: Routes = [

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthComponent)
  },
  {
    path: 'daviplata',
    loadChildren: () => import ('./daviplata/daviplata.module').then( m => m.daviplataModule)
  },
  
  {
    path: '404',
    component: ErrorpageComponent

  },
  {
    path: '**',
     //component: ErrorpageComponent
     redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
