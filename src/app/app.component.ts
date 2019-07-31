import { Component } from '@angular/core';
import { DatabaseService } from './services/database.service';
import { PeopleComponent } from './people/people.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Team Smog SWAPI';
  bigData1 = [];
  bigData2 = [];
  bigData3 = [];
  constructor(private dataService: DatabaseService) {
  }
  ngOnInit() {
    this.dataService.getFilm('A New Hope').subscribe(data => this.bigData1 = data.results[0])
    this.dataService.getPeople('r2').subscribe(data => this.bigData2 = data.results[0])
    this.dataService.getStarship('Death Star').subscribe(data => this.bigData3 = data.results[0])
  }

  

}