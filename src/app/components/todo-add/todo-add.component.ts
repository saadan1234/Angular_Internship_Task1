import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-add',
  template: `
    <input [(ngModel)]="newTaskTitle" placeholder="Add a new task" />
    <button (click)="addTask()">Add Task</button>
  `,
  styles: []
})
export class TodoAddComponent {
  @Output() newTask = new EventEmitter<string>();
  newTaskTitle = '';

  addTask() {
    if (this.newTaskTitle.trim()) {
      this.newTask.emit(this.newTaskTitle);
      this.newTaskTitle = '';
    }
  }
}
