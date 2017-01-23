import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'slq-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  clientWindow: Window = null;

  constructor() { }

  ngOnInit() {
  }

  openClient() {
    this.clientWindow = window.open('http://localhost:4200/client');
  }
}
