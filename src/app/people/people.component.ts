import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  bigData2 = [];
  search = 'r2'

  constructor(private databaseService : DatabaseService) { }

  ngOnInit() {
    this.getPeople(this.search);
  }

  getPeople(search):void{
    this.databaseService.getPeople(search).subscribe(data =>{this.bigData2 = data.results[0]}) 
  }

}
