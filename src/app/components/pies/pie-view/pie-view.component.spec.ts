/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PieViewComponent } from './pie-view.component';

describe('PieViewComponent', () => {
  let component: PieViewComponent;
  let fixture: ComponentFixture<PieViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
