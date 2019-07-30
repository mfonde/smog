import { Component } from '@angular/core';
import { DatabaseService } from './services/database.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'smog';
<<<<<<< HEAD
  person = '';
  
  constructor(private dataService: DatabaseService){
    
  }
  
  ngOnInit(){
    this.dataService.getFilm('A New Hope').subscribe(data => console.log(data))
    this.dataService.getPeople('r2').subscribe(data => this.person = data.name)
    this.dataService.getStarship('Death Star').subscribe(data => console.log(data))
=======
  bigData1 = [];
  bigData2 = [];
  bigData3 = [];


  constructor(private dataService: DatabaseService) {

  }

  ngOnInit() {
    this.dataService.getFilm('A New Hope').subscribe(data => this.bigData1 = data.results[0])
    this.dataService.getPeople('r2').subscribe(data => this.bigData2 = data.results[0])
    this.dataService.getStarship('Death Star').subscribe(data => this.bigData3 = data.results[0])
>>>>>>> 3c6f4854223b8b15d0ae418464f4704328fd9a90
  }
}