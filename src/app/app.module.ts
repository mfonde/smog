import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FilmsComponent } from './films/films.component';
import { DatabaseService } from './services/database.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ DatabaseService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
