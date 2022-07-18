/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PieListComponent } from './pie-list.component';

describe('PieListComponent', () => {
  let component: PieListComponent;
  let fixture: ComponentFixture<PieListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
