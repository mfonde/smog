import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { FilmsComponent } from './films/films.component';
import { DatabaseService } from './services/database.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FilmCardComponent } from './film-card/film-card.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    FilmCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [ DatabaseService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
