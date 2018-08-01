import { TestBed, inject } from '@angular/core/testing';

import { CountryService } from './country.service';
import { HttpClientModule } from '@angular/common/http';
import { Country } from '../models/country';

fdescribe('CountryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [CountryService]
    });
  });

  it('should be created', inject([CountryService], (service: CountryService) => {
    expect(service).toBeTruthy();
  }));

  it('should get all countries', inject([CountryService], (service: CountryService) => {
    service.getCountries().subscribe(countries => {
      expect(countries.length).toBeGreaterThan(0);
    });

  }));
});
