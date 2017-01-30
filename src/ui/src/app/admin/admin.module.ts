import { SharedModule } from './../shared/shared.module';
import { routedComponents, AdminRoutingModule } from './admin.routing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TimerComponent } from './components';

@NgModule({
  imports: [AdminRoutingModule, CommonModule, HttpModule, FormsModule, SharedModule],
  exports: [],
  declarations: [routedComponents, TimerComponent],
  providers: [],
})
export class AdminModule { }
