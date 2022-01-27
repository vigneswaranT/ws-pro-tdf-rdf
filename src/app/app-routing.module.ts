import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactievComponent } from './reactiev/reactiev.component';
import { TemplateComponent } from './template/template.component';

const routes: Routes = [
  {
    path:'template',
    component:TemplateComponent
  },
  {
    path:'reactiev',
    component:ReactievComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }