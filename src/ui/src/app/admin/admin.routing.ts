import {  } from './gallery/gallery.component';
import { SetUpComponent,
   AdminThreeSixNineComponent,
   AdminPuzzlesComponent,
   AdminGalleryComponent,
   AdminComponent } from './';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'setup', pathMatch: 'full'},
      { path: 'setup', component: SetUpComponent },
      { path: 'three-six-nine', component: AdminThreeSixNineComponent },
      { path: 'puzzles', component: AdminPuzzlesComponent },
      { path: 'gallery', component: AdminGalleryComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
  providers: [],
})
export class AdminRoutingModule { }

export const routedComponents = [
    AdminComponent,
    SetUpComponent,
    AdminThreeSixNineComponent,
    AdminGalleryComponent,
    AdminPuzzlesComponent
];
