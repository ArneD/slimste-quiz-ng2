/* tslint:disable:no-unused-variable */

import { StoreModule } from '@ngrx/store';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { rootReducer } from '../../state/root-reducer';
import { AdminThreeSixNineComponent } from './three-six-nine.component';

describe('AdminThreeSixNineComponent', () => {
  let component: AdminThreeSixNineComponent;
  let fixture: ComponentFixture<AdminThreeSixNineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminThreeSixNineComponent ],
      imports: [
        StoreModule.provideStore(rootReducer)
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminThreeSixNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
