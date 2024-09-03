import { Component } from '@angular/core'; // Imports the Component decorator from Angular Core

// Interface to define the structure of a Task object
interface Task {
  id: number; // Unique identifier for the task
  title: string; // Title of the task
  completed: boolean; // Indicates if the task is completed or not (true/false)
}

@Component({
  selector: 'app-root', // Defines the custom HTML tag for this component (`<app-root>`)
  templateUrl: './app.component.html', // Path to the HTML template associated with this component
  styleUrls: ['./app.component.css'] // Path to the CSS stylesheet for this component (optional)
})
export class AppComponent {
  // Array to store all tasks
  tasks: Task[] = [];

  // Array to store filtered tasks based on user input
  filteredTasks: Task[] = [];

  // Counter to generate unique IDs for new tasks
  nextId = 1;

  // Function to add a new task
  addTask(title: string) {
    this.tasks.push({ // Pushes a new Task object to the tasks array
      id: this.nextId++, // Assigns a unique ID and increments the counter
      title, // Sets the title based on the provided argument
      completed: false, // Sets the completed status to false by default
    });
    this.filteredTasks = [...this.tasks]; // Updates the filtered tasks to reflect the new addition
  }

  // Function to filter tasks based on a search query
  filterTasks(query: string) {
    this.filteredTasks = this.tasks.filter(task => // Filters the tasks array
      task.title.toLowerCase().includes(query.toLowerCase()) // Case-insensitive search on task title
    );
  }

  // Function to edit an existing task
  editTask(updatedTask: Task) {
    const index = this.tasks.findIndex(task => task.id === updatedTask.id); // Finds the index of the task to update by ID
    if (index !== -1) {
      this.tasks[index] = updatedTask; // Replaces the task at the index with the updated information
      this.filteredTasks = [...this.tasks]; // Updates the filtered tasks to reflect the edit
    }
  }

  // Function to delete a task
  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id); // Filters out the task with the matching ID from the tasks array
    this.filteredTasks = [...this.tasks]; // Updates the filtered tasks to reflect the deletion
  }
}