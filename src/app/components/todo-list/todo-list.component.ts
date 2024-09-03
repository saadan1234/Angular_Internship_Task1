import { Component, EventEmitter, Input, Output } from '@angular/core';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-list',
  template: `
    <ul>
      <li *ngFor="let task of tasks">
        <input
          type="text"
          [(ngModel)]="task.title"
          (blur)="onEdit(task)"
        />
        <button (click)="onDelete(task.id)">Delete</button>
      </li>
    </ul>
  `,
  styles: []
})
export class TodoListComponent {
  @Input() tasks: Task[] = [];
  @Output() editTask = new EventEmitter<Task>();
  @Output() deleteTask = new EventEmitter<number>();

  onEdit(task: Task) {
    this.editTask.emit(task);
  }

  onDelete(id: number) {
    this.deleteTask.emit(id);
  }
}
