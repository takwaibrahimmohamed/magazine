/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LifeInAswanComponent } from './lifeInAswan.component';

describe('LifeInAswanComponent', () => {
  let component: LifeInAswanComponent;
  let fixture: ComponentFixture<LifeInAswanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeInAswanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeInAswanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
