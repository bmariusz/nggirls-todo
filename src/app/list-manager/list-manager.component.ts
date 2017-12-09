import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'todo-list-manager',
  template: `
      <!--The content below is only a placeholder and can be replaced.-->
    <div class="todo-app">
      <h1>
        Welcome to {{ title }}!
      </h1>
      <todo-input class="todo-add" (submit)="addItem($event)"></todo-input>
      <ul>
        <li *ngFor="let item of todoList">
          <todo-item [todoItem]="item" (remove)="removeItem($event)"></todo-item>
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {
  title = 'todo';
  todoList: any[];

  ngOnInit() {
    this.todoList = this.todoListService.getTodoList();
  }

  constructor(private todoListService: TodoListService) { }

  addItem(title): void {
    this.todoList = this.todoListService.addItem({ title });
  }

  removeItem(item) {
    this.todoList = this.todoListService.removeItem(item);
  }

}
