import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AdminPanelLibraryModule } from 'projects/admin-panel-library/src/public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AdminPanelLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
