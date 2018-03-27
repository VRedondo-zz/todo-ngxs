import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule, NgxsReduxDevtoolsPluginModule } from 'ngxs';

import { AppComponent } from './app.component';
import { TodoState } from './todo.state';
import { TodoListComponent } from './todo-list.component';
import { TodosComponent } from './containers/todos.component';
@NgModule({
  declarations: [AppComponent, TodoListComponent, TodosComponent],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([TodoState]),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
