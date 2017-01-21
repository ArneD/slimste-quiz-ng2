/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ClientSetUpComponent } from './set-up.component';

describe('ClientSetUpComponent', () => {
  let component: ClientSetUpComponent;
  let fixture: ComponentFixture<ClientSetUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientSetUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientSetUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
