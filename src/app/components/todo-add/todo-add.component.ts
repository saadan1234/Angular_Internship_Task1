// Importing necessary modules from Angular core
import { Component, EventEmitter, Output } from '@angular/core';

// Defining the component using the @Component decorator
@Component({
  selector: 'app-todo-add', // Selector used to include this component in HTML as <app-todo-add>
  template: `
    <!-- Input field for adding a new task, bound to 'newTaskTitle' -->
    <input class="border-purple-600 border-2 m-5 rounded p-2" [(ngModel)]="newTaskTitle" placeholder="Add a new task" />
    
    <!-- Button that triggers 'addTask()' method when clicked -->
    <button class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center" (click)="addTask()">Add Task</button>
  `,
  styles: [] // Empty styles array, indicating no specific styles are applied to this component
})
export class TodoAddComponent {
  // Event emitter to emit the new task title to the parent component when a task is added
  @Output() newTask = new EventEmitter<string>(); // Output property to send new task data to the parent component
  newTaskTitle = ''; // Property to hold the input value of the new task title

  // Method to add a new task
  addTask() {
    // Check if the input is not empty or just whitespace
    if (this.newTaskTitle.trim()) {
      // Emit the value of 'newTaskTitle' as a new task event to the parent component
      this.newTask.emit(this.newTaskTitle);
      // Clear the input field after adding the task
      this.newTaskTitle = '';
    }
  }
}
