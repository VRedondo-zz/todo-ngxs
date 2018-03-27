import { State, Action, StateContext, Selector } from 'ngxs';
import { Todo } from './todo';
import { AddTodo, RemoveTodo } from './todo.actions';

interface IState {
  todos: Todo[];
}

@State<IState>({
  name: 'reducerTodos',
  defaults: {
    todos: []
  }
})
export class TodoState {
  // Selectors
  @Selector()
  static todos(state: IState) {
    return state.todos;
  }
  // Actions
  @Action(AddTodo)
  addTodo(
    { getState, patchState }: StateContext<IState>,
    { payload }: AddTodo
  ) {
    const state = getState();
    patchState({
      todos: [...state.todos, payload]
    });
  }
}
