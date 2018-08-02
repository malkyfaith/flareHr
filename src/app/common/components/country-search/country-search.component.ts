import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { CountryService } from '../../services/country.service';
import { Country } from '../../models/country';
@Component({
  selector: 'app-country-search',
  templateUrl: './country-search.component.html',
  styleUrls: ['./country-search.component.css']
})
export class CountrySearchComponent implements OnInit {
  loading = false;
  @Output() onSelectCountry: any = new EventEmitter<Country>();
  filteredCountries: Country[] = [];
  constructor(private countryService: CountryService) { }

  ngOnInit() {
  }

  onInput(val: string) {
    if (val.length >= 3) {
      this.loading = true;
      this.countryService.getCountries().subscribe((countries: Country[]) => {
        this.filteredCountries = countries.filter((item: Country) => item.Name.toLowerCase().indexOf(val.toLowerCase()) > -1).slice(0, 9);
        this.loading = false;
      });
    }
    if (val.length === 0) {
      this.filteredCountries = [];
      this.onSelectCountry.emit([]);
    }
  }

  onSelect(selectedCountry: Country) {
    this.onSelectCountry.emit(selectedCountry);
  }

}
