import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryViewComponent } from './country-view.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('CountryViewComponent', () => {
  let component: CountryViewComponent;
  let fixture: ComponentFixture<CountryViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryViewComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
