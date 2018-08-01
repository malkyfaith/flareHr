import { Component, OnInit, Input } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country-view',
  templateUrl: './country-view.component.html',
  styleUrls: ['./country-view.component.css']
})
export class CountryViewComponent implements OnInit {
  @Input() country;
  imageLoader = true;

  constructor() { }

  ngOnInit() {

  }

}
