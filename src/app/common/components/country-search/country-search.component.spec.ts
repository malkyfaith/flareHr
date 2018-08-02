import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrySearchComponent } from './country-search.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CountryService } from '../../services/country.service';

describe('CountrySearchComponent', () => {
  let component: CountrySearchComponent;
  let fixture: ComponentFixture<CountrySearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountrySearchComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [CountryService],


    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountrySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
