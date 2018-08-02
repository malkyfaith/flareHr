import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeAheadComponent } from './type-ahead.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('TypeAheadComponent', () => {
  let component: TypeAheadComponent;
  let fixture: ComponentFixture<TypeAheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeAheadComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeAheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
