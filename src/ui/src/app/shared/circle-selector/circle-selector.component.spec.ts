/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CircleSelectorComponent } from './circle-selector.component';

describe('CircleSelectorComponent', () => {
  let component: CircleSelectorComponent;
  let fixture: ComponentFixture<CircleSelectorComponent>;
  let expectedText = '1';
  let exprectedSelectedValue = '1';
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleSelectorComponent ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleSelectorComponent);

    fixture.componentInstance.text = expectedText;
    fixture.componentInstance.selectedValue = exprectedSelectedValue;
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('creates', () => {
    expect(component).toBeTruthy();
  });

  it('has expected values', () => {
    expect(component.text).toBe(expectedText);
    expect(component.selectedValue).toBe(exprectedSelectedValue);

    // TODO:fix change detection (https://github.com/angular/angular/issues/9866)
    component.ngOnChanges();

    expect(component.showCircle).toBe(true);
    expect(component.textColor).toBe('orange');
  });

  it('has default color and showCircle when selectedValue does not equal text', () => {
    component.selectedValue = '2';

    // TODO:fix change detection (https://github.com/angular/angular/issues/9866)
    component.ngOnChanges();

    expect(component.showCircle).toBe(false);
    expect(component.textColor).toBe('white');
  });

});
