import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../service/country.service';

@Component({
  selector: 'app-country-view',
  templateUrl: './country-view.component.html',
  styleUrls: ['./country-view.component.css']
})
export class CountryViewComponent implements OnInit {

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.countryService.getCountries().subscribe((countries) => {
      console.log(countries);
    });
  }

}
