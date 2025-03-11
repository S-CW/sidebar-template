import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>`,
  styles: [],
})
export class TodoListComponent {}
