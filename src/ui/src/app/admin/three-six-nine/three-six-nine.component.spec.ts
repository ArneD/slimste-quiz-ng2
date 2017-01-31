/* tslint:disable:no-unused-variable */

import { FormsModule } from '@angular/forms';
import { AdminPuzzlesComponent } from './../puzzles/puzzles.component';
import { SetUpComponent } from './../set-up/set-up.component';
import { ThreeSixNineComponent } from './../../shared/three-six-nine/three-six-nine.component';
import { ScoreService } from './../../core/score.service';
import { SharedModule } from './../../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { StoreService } from './../../core/store.service';
import { rootReducer } from '../../state/root-reducer';
import { AdminThreeSixNineComponent } from './three-six-nine.component';
import { TimerComponent, NextComponent } from './../components';

describe('AdminThreeSixNineComponent', () => {
  let component: AdminThreeSixNineComponent;
  let fixture: ComponentFixture<AdminThreeSixNineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AdminThreeSixNineComponent,
        SetUpComponent,
        AdminPuzzlesComponent,
        TimerComponent,
        NextComponent],
      imports: [
        SharedModule,
        StoreModule.provideStore(rootReducer),
        RouterTestingModule,
        FormsModule
      ],
      providers: [ ScoreService, StoreService ]
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
