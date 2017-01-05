import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ThreeSixNineComponent } from './three-six-nine';
import { SetUpComponent } from './admin';

const routes: Routes  = [
  { path: '', component: SetUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [SetUpComponent, ThreeSixNineComponent];
