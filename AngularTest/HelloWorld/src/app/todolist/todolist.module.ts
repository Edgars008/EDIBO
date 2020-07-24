import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodolistComponent } from './todolist.component';
import { TodolistService} from './todolist.service';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [TodolistComponent],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports:[
    TodolistComponent,
  ],
  providers:[
    TodolistService
  ]
})
export class TodolistModule { }
