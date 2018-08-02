import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Country } from '../models/country';
import { COUNTRIES_MOCKS } from '../models/country.mock';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class CountryService {

  constructor() { }

  getCountries(): Observable<Country[]> {
    return Observable.of(COUNTRIES_MOCKS);
  }

}
