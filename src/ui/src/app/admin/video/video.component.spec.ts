
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StoreService } from './../../core/store.service';
import { ScoreService } from './../../core/score.service';
import { SharedModule } from './../../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { AdminVideoComponent } from './video.component';
import { rootReducer } from '../../state/root-reducer';
import { TimerComponent, NextComponent } from './../components';

describe('VideoComponent', () => {
  let component: AdminVideoComponent;
  let fixture: ComponentFixture<AdminVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminVideoComponent, TimerComponent, NextComponent ],
      imports: [
        RouterTestingModule,
        StoreModule.provideStore(rootReducer),
        SharedModule
      ],
      providers: [ScoreService, StoreService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
