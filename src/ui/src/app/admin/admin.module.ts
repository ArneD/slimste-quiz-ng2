import { SharedModule } from './../shared/shared.module';
import { routedComponents, AdminRoutingModule } from './admin.routing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [AdminRoutingModule, CommonModule, HttpModule, FormsModule, SharedModule],
  exports: [],
  declarations: [routedComponents],
  providers: [],
})
export class AdminModule { }
