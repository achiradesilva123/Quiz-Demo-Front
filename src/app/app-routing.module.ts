import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashComponent } from './component/dash/dash.component';
import { RegisterComponent } from './component/register/register.component';

const routes: Routes = [
  { path :  'register' ,  component : RegisterComponent},
  { path :  'dash' ,  component : DashComponent},
  { path :  '' ,  component : DashComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
