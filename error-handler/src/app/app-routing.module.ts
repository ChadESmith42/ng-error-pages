import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [
  { path: 'error', component: ErrorComponent },
  { path: 'not-found', component: ErrorComponent },
  { path: 'unauthorized', component: ErrorComponent },
  { path: 'conflict', component: ErrorComponent },
  { path: 'server-error', component: ErrorComponent },
  { path: 'youre-an-idiot', component: ErrorComponent },
  { path: 'i-am-a-teapot', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
