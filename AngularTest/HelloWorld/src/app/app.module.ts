import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{CurrencyModule} from './currency/currency.module'
import { AppRoutingModule } from './app-routing.module';
import{WeatherModule} from './weather/weather.module'
import{TodolistModule} from './todolist/todolist.module'


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    CurrencyModule,
    AppRoutingModule,
    WeatherModule,
    TodolistModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
