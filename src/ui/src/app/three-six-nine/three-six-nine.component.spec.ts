/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ThreeSixNineComponent } from './three-six-nine.component';
import { CircleSelectorComponent } from './../shared';

describe('ThreeSixNineComponent', () => {
  let component: ThreeSixNineComponent;
  let fixture: ComponentFixture<ThreeSixNineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeSixNineComponent, CircleSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeSixNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
