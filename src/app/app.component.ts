import { Component } from '@angular/core';
import { DatabaseService } from './services/database.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'smog';
  person = '';
  
  constructor(private dataService: DatabaseService){
    
  }
  
  ngOnInit(){
    this.dataService.getFilm('A New Hope').subscribe(data => console.log(data))
    this.dataService.getPeople('r2').subscribe(data => this.person = data.name)
    this.dataService.getStarship('Death Star').subscribe(data => console.log(data))
  }
}