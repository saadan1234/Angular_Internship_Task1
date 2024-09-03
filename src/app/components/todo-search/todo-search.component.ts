import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-search',
  template: `
    <input [(ngModel)]="query" (input)="onSearch()" placeholder="Search tasks" />
  `,
  styles: []
})
export class TodoSearchComponent {
  @Output() searchQuery = new EventEmitter<string>();
  query = '';

  onSearch() {
    this.searchQuery.emit(this.query);
  }
}
