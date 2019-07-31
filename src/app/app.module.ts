import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { DatabaseService } from './services/database.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PeopleComponent } from './people/people.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [DatabaseService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
