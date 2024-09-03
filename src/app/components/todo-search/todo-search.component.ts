// Importing necessary modules from Angular core
import { Component, EventEmitter, Output } from '@angular/core';

// Defining the component using decorator
@Component({
  selector: 'app-todo-search', // Selector used to include this component in HTML as <app-todo-search>
  template: `
    <!-- Input field bound to the 'query' property and triggers 'onSearch()' method on input -->
    <input class="border-purple-600 border-2 m-5 rounded p-2" [(ngModel)]="query" (input)="onSearch()" placeholder="Search tasks" />
  `,
  styles: [] // Empty styles array, indicating no specific styles are applied to this component
})
export class TodoSearchComponent {
  // Event emitter that emits the search query when the user types in the input field
  @Output() searchQuery = new EventEmitter<string>(); // Output property to send search query to parent component
  query = ''; // Property to hold the current search input value

  // Method called whenever the user types in the input field
  onSearch() {
    // Emitting the current value of the query as a search query event
    this.searchQuery.emit(this.query);
  }
}
