import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { WeatherService} from './weather.service';
import { WeatherComponent } from './weather.component';


@NgModule({
  declarations: [WeatherComponent],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports:[
    WeatherComponent,
  ],
  providers:[
    WeatherService
  ]
})
export class WeatherModule { }
