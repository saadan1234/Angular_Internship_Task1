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
      <li class="p-5 m-2 bg-gradient-to-r from-purple-700 to-purple-200" *ngFor="let task of tasks">
        <input class="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
          type="text"
          [(ngModel)]="task.title"
          (blur)="onEdit(task)"
        />
        <button class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" (click)="onDelete(task.id)">Delete</button>
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
