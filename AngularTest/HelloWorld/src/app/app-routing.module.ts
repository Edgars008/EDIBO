import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import { CurrencyComponent } from './currency/currency.component';
import { WeatherComponent } from './weather/weather.component';
import { TodolistComponent } from './todolist/todolist.component';


const routes: Routes = [
  {path: '', component: AppComponent, pathMatch: 'full'},
  {path: 'Currency', component: CurrencyComponent},
  {path: 'Weather', component: WeatherComponent},
  {path: 'Todolist', component: TodolistComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
