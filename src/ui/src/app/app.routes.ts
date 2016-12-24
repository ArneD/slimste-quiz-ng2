import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ThreeSixNineComponent } from './three-six-nine';

const routes: Routes  = [
  { path: '', component: ThreeSixNineComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [ThreeSixNineComponent];
