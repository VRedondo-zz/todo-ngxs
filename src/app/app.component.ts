import { Component } from '@angular/core';
import * as nanoid from 'nanoid';

import { TodoState } from './todo.state';
import { AddTodo } from './todo.actions';
import { Select, Store } from 'ngxs';
import { Observable } from 'rxjs/Observable';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Select(TodoState.todos) todos$: Observable<Todo[]>;

  title = 'Todos';

  constructor(private store: Store) {
    const currentDate = new Date();
    const todo: Todo = {
      id: nanoid(),
      createdDate: currentDate.toLocaleTimeString(),
      completedDate: null,
      isCompleted: true,
      description: `Test ${currentDate.toLocaleTimeString()}`
    };
    this.store.dispatch(new AddTodo(todo)).subscribe(() => {
      console.log('New todo added');
    });
  }
}
