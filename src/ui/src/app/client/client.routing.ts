import { ClientSetUpComponent, ClientComponent } from './';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ThreeSixNineComponent, PuzzlesComponent, GalleryComponent } from './../shared/';

const routes: Routes = [
  { path: 'client',
    component: ClientComponent,
    children: [
      { path: '', redirectTo: 'setup', pathMatch: 'full' },
      { path: 'setup', component: ClientSetUpComponent },
      { path: 'three-six-nine', component: ThreeSixNineComponent },
      { path: 'puzzles', component: PuzzlesComponent },
      { path: 'gallery', component: GalleryComponent },
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
    ClientSetUpComponent
];
