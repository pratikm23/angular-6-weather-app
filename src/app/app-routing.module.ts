import { AboutComponent } from './about/about.component';
import { WeathernewsComponent } from './weathernews/weathernews.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { WeatherTodayComponent } from './weather-today/weather-today.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '',redirectTo:'/today',pathMatch:'full'},
  {path:'today',component:WeatherTodayComponent},
  {path:'about',component:AboutComponent},
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
