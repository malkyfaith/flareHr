import { Component, OnInit } from '@angular/core';
import { Country } from '../../models/country';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country-container',
  templateUrl: './country-container.component.html',
  styleUrls: ['./country-container.component.css']
})
export class CountryContainerComponent implements OnInit {
  selectedCountry: Country;
  recentlySearchedCountries: Country[] = [];
  constructor(private countryService: CountryService) { }

  ngOnInit() {
  }

  showCountry(country: Country) {
    console.log('');
    this.countryService.getCountries().subscribe((countries: Country[]) => {
      this.selectedCountry = countries.filter(item => item.Alpha3Code === country.Alpha3Code)[0];
      if (this.recentlySearchedCountries.indexOf(this.selectedCountry) > -1) {
        this.recentlySearchedCountries.splice(this.recentlySearchedCountries.indexOf(this.selectedCountry), 1);
      }
      this.recentlySearchedCountries.unshift(this.selectedCountry);
    });

  }

}
