/* tslint:disable:no-unused-variable */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from './../../shared/shared.module';
import { StoreService } from './../../core/store.service';
import { ScoreService } from './../../core/score.service';
import { rootReducer } from '../../state/root-reducer';

import { AdminGalleryComponent } from './gallery.component';
import { TimerComponent, NextComponent } from './../components';

describe('AdminGalleryComponent', () => {
  let component: AdminGalleryComponent;
  let fixture: ComponentFixture<AdminGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminGalleryComponent, TimerComponent, NextComponent ],
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
    fixture = TestBed.createComponent(AdminGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
