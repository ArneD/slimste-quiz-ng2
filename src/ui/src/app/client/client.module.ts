import { SharedModule } from './../shared/shared.module';
import { routedComponents, ClientRoutingModule } from './client.routing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [ClientRoutingModule, CommonModule, FormsModule, SharedModule],
  exports: [],
  declarations: [routedComponents],
  providers: [],
})
export class ClientModule { }
