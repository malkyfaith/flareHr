import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Country } from '../../models/country';

@Component({
  selector: 'app-recently-searched-countries',
  templateUrl: './recently-searched-countries.component.html',
  styleUrls: ['./recently-searched-countries.component.css']
})
export class RecentlySearchedCountriesComponent implements OnInit {
  @Input() countries: Country[] = [];
  @Output() onSelectCountry: any = new EventEmitter<Country>();
  constructor() { }

  ngOnInit() {
  }

  onSelect(selectedCountry: Country) {
    this.onSelectCountry.emit(selectedCountry);
  }

}
