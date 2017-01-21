import { AppRoutingModule } from './../../app.routing';
/* tslint:disable:no-unused-variable */

import { FormsModule } from '@angular/forms';
import { AdminPuzzlesComponent } from './../puzzles/puzzles.component';
import { SetUpComponent } from './../set-up/set-up.component';
import { ThreeSixNineComponent } from './../../shared/three-six-nine/three-six-nine.component';
import { AdminRoutingModule } from './../admin.routing';
import { RouterModule } from '@angular/router';
import { ScoreService } from './../../core/score.service';
import { SharedModule } from './../../shared/shared.module';
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
      declarations: [ AdminThreeSixNineComponent, SetUpComponent, AdminPuzzlesComponent ],
      imports: [
        SharedModule,
        StoreModule.provideStore(rootReducer),
        AppRoutingModule,
        AdminRoutingModule,
        FormsModule
      ],
      providers: [ ScoreService ]
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
