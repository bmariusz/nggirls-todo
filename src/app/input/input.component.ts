import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-input',
  template: `
    <input class="todo-input" [value]="title"
      (keyup.enter)="changeTitle(inputElement)"
      #inputElement>
    <button class="btn" (click)="changeTitle(inputElement)">Save</button>
    <!-- <p>The title is: {{ title }}</p> -->
  `,
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Output() submit: EventEmitter<string> = new EventEmitter();

  title: string = 'My First Todo Title !!!';

  constructor() { }

  ngOnInit() {
    /* setTimeout(() => {
      this.title = 'This is not the title you are looking for';
    }, 3000); */
  }

  changeTitle(inputElementRference): void {
    console.log(inputElementRference);
    this.title = inputElementRference.value;
    this.submit.emit(this.title)
  }

}
