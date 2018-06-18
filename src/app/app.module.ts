import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './weather.service';
import { GeolocationService } from './geolocation.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WeatherTodayComponent } from './weather-today/weather-today.component';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AboutComponent } from './about/about.component';
import { WeathernewsComponent } from './weathernews/weathernews.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WeatherTodayComponent,
    WeatherForecastComponent,
    PagenotfoundComponent,
    AboutComponent,
    WeathernewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GeolocationService, WeatherService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
