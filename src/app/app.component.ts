import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Todo simple';
  todos = [
    {label: 'Add something'}
  ]

  addTodo(newToDoLabel){
    let newTodo = {
      label: newToDoLabel
    };
    this.todos.push(newTodo);
    console.log( this.todos)
  }
}
