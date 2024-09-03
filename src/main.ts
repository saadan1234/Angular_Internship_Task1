/* Main Entry Point of the App */

// For loading application in the browser when required opening.
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Root module of the App
import { AppModule } from './app/app.module';

// Creates Platform for loading.
platformBrowserDynamic()
// Bootstraps the main AppModule as root
.bootstrapModule(AppModule, 
{//Looks for changes
  ngZoneEventCoalescing: true
})//Catch error while bootstrapping process
  .catch(err => console.error(err));
