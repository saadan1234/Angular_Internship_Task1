// Grouping of modules through the below directive.
import { NgModule } from '@angular/core';
// Required for running the app in the browser.
import { BrowserModule } from '@angular/platform-browser';
// Used for tempelate driven form support.
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoAddComponent } from './components/todo-add/todo-add.component';
import { TodoSearchComponent } from './components/todo-search/todo-search.component';

//Module for grouping
@NgModule({
  declarations: [// Includes components, directives and pipes
    AppComponent,
    TodoListComponent, 
    TodoAddComponent,
    TodoSearchComponent 
  ],
  imports: [// Includes modules require for the app to function properly
    BrowserModule,
    FormsModule
  ],
  providers: [], // Specific Services for modules.
  bootstrap: [AppComponent] // Root component of the App also the entry point.
})
export class AppModule { }
