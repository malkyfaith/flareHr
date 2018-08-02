import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryContainerComponent } from './country-container.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { COUNTRIES_MOCKS } from '../../models/country.mock';
import { Observable } from 'rxjs/Observable';

describe('CountryContainerComponent', () => {
  let component: CountryContainerComponent;
  let fixture: ComponentFixture<CountryContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CountryContainerComponent],
      providers: [CountryService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create ', () => {

    expect(component).toBeTruthy();
  });

  it('should call getCountries()', () => {
    const service = TestBed.get(CountryService); // get your service
    spyOn(service, 'getCountries').and.returnValue(Observable.of(COUNTRIES_MOCKS));
    component.showCountry({
      'Name': 'Afghanistan', 'Alpha2Code': 'AF', 'Alpha3Code': 'AFG', 'NativeName': 'افغانستان',
      'Region': 'Asia', 'SubRegion': 'Southern Asia', 'Latitude': '33', 'Longitude': '65', 'Area': 652230, 'NumericCode': 4,
      'NativeLanguage': 'pus', 'CurrencyCode': 'AFN', 'CurrencyName': 'Afghan afghani', 'CurrencySymbol': '؋',
      // tslint:disable-next-line:max-line-length
      'Flag': 'https://api.backendless.com/2F26DFBF-433C-51CC-FF56-830CEA93BF00/473FB5A9-D20E-8D3E-FF01-E93D9D780A00/files/CountryFlags/afg.svg', 'FlagPng': 'https://api.backendless.com/2F26DFBF-433C-51CC-FF56-830CEA93BF00/473FB5A9-D20E-8D3E-FF01-E93D9D780A00/files/CountryFlagsPng/afg.png'
    });
    expect(service.getCountries.toHaveBeenCalled);

  });
});
