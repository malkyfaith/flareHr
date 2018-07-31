import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Country } from '../models/country';

@Injectable()
export class CountryService {

  constructor(private http: HttpClient) { }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>('http://countryapi.gear.host/v1/Country/getCountries');
  }

}
