import { SetUpComponent, AdminThreeSixNineComponent } from './';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'admin/setup', component: SetUpComponent },
  { path: 'admin/three-six-nine', component: AdminThreeSixNineComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
  providers: [],
})
export class AdminRoutingModule { }

export const routedComponents = [
    SetUpComponent,
    AdminThreeSixNineComponent
];
