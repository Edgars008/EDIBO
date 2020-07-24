import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { map } from 'rxjs/operators';

interface TodoListData {
  id: number;
  name: string;
  creationTime: string;
  updateTime: string,
  isComplete: boolean;
}

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})

export class TodolistComponent implements OnInit {
  
    todoList: any[];

  constructor(private restClient: HttpClient) {}

  ngOnInit(): void {
    this.restClient
      .get<TodoListData>(this.getTodoListUrl())
      .subscribe((data) => this.processData(data));
  }

  processData(data: TodoListData): void {
      this.todoList = Object.entries(data);
  }
    getTodoListUrl(): string {
    return environment.TodoListUrl;
      
  }
}
