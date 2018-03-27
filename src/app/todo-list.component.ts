import { Component, OnInit, Input } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-todo-list',
  template: `
 <div *ngFor="let todo of todos" class="todo-list">
  <input type="checkbox" name="completed" [checked]="todo.isCompleted" />
  <div>{{todo.description}}</div>
 </div>
 `
})
export class TodoListComponent implements OnInit {
  @Input() todos: Todo[];

  constructor() {}

  ngOnInit() {}
}
