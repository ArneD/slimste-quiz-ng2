import { Store, StoreModule } from '@ngrx/store';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SetUpComponent } from './set-up.component';

describe('SetUpComponent', () => {
  let component: SetUpComponent;
  let fixture: ComponentFixture<SetUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetUpComponent ],
      imports: [FormsModule, StoreModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', async(() => {
    expect(component).toBeTruthy();
  }));
});
