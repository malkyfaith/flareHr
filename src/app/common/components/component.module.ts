import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryViewComponent } from './country-view/country-view.component';
import { TypeAheadComponent } from './type-ahead/type-ahead.component';
import { CountrySearchComponent } from './country-search/country-search.component';
import { CountryContainerComponent } from './country-container/country-container.component';
import { RecentlySearchedCountriesComponent } from './recently-searched-countries/recently-searched-countries.component';
import { MyMaterialModuleModule } from '../../my-material-module/my-material-module.module';

@NgModule({
  imports: [
    CommonModule,
    MyMaterialModuleModule,
  ],
  declarations: [CountryViewComponent, TypeAheadComponent, CountrySearchComponent, CountryContainerComponent, RecentlySearchedCountriesComponent],
  exports: [CountryViewComponent, TypeAheadComponent, CountrySearchComponent, CountryContainerComponent]
})
export class ComponentsModule { }
