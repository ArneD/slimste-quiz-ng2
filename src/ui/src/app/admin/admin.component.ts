import { StoreService } from './../core/store.service';
import { Store } from '@ngrx/store';
import { IState } from './../core/states';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'slq-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  clientWindow: Window = null;

  constructor(private store: Store<IState>, private storeService: StoreService) { }

  ngOnInit() {
  }

  openClient() {
    this.clientWindow = window.open('http://localhost:4200/client');
    this.clientWindow['slqStore'] = this.store;
  }
}
