import { Todo } from './todo';

export class AddTodo {
  constructor(public payload: Todo) {}
}

export class RemoveTodo {
  constructor(public payload: number) {}
}
