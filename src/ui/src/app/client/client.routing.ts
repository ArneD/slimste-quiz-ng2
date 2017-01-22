import { ClientSetUpComponent, ClientComponent, ClientThreeSixNineComponent } from './';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'client',
    component: ClientComponent,
    children: [
      { path: '', redirectTo: 'setup', pathMatch: 'full' },
      { path: 'setup', component: ClientSetUpComponent },
      { path: 'three-six-nine', component: ClientThreeSixNineComponent },
    // { path: 'puzzles', component: ClientPuzzlesComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
  providers: [],
})
export class ClientRoutingModule { }

export const routedComponents = [
    ClientComponent,
    ClientSetUpComponent,
    ClientThreeSixNineComponent
];
