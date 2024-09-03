import { Component } from '@angular/core';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: Task[] = [];
  filteredTasks: Task[] = [];
  nextId = 1;

  addTask(title: string) {
    this.tasks.push({ id: this.nextId++, title, completed: false });
    this.filteredTasks = [...this.tasks];
  }

  filterTasks(query: string) {
    this.filteredTasks = this.tasks.filter(task =>
      task.title.toLowerCase().includes(query.toLowerCase())
    );
  }

  editTask(updatedTask: Task) {
    const index = this.tasks.findIndex(task => task.id === updatedTask.id);
    if (index !== -1) {
      this.tasks[index] = updatedTask;
      this.filteredTasks = [...this.tasks];
    }
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.filteredTasks = [...this.tasks];
  }
}
