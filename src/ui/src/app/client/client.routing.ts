import { ClientSetUpComponent, ClientComponent } from './';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'client',
    component: ClientComponent,
    children: [
      { path: '', redirectTo: 'setup', pathMatch: 'full' },
      { path: 'setup', component: ClientSetUpComponent },
    // { path: 'client/three-six-nine', component: ClientThreeSixNineComponent },
    // { path: 'client/puzzles', component: ClientPuzzlesComponent }
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
];
