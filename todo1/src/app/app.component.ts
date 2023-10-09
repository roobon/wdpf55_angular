import { Component } from '@angular/core';

import { TodoList } from "./todoList";
import { TodoItem } from "./todoItem";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  private list = new TodoList("Bob", [
    new TodoItem("Go for run"),
    new TodoItem("Get flowers"),
    new TodoItem("Collect tickets"),
    new TodoItem("Go to Bazar"),
    ]);
    get username(): string {
    return this.list.user;
    }
    get itemCount(): number {
    return this.list.items.filter(item => !item.complete).length;
    }
}
