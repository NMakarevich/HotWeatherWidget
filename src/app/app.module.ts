import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { WeatherComponent } from './weather/weather.component';
import { SocialComponent } from './social/social.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './main/card/card.component';
import { CountryFilterPipe } from './main/country-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    WeatherComponent,
    SocialComponent,
    CardComponent,
    CountryFilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
