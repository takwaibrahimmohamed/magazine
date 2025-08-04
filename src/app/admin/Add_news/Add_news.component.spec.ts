/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Add_newsComponent } from './Add_news.component';

describe('Add_newsComponent', () => {
  let component: Add_newsComponent;
  let fixture: ComponentFixture<Add_newsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Add_newsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Add_newsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
