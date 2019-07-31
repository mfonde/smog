import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public searchForm: FormGroup;
  smallData = []; // has searchTerm and searchType
  bigData2 = [];

  constructor(private form: FormBuilder, private databaseService: DatabaseService) {
    this.createForm();
  }

  ngOnInit() {

  }

  createForm() {
    this.searchForm = this.form.group({
      searchType: new FormControl,
      searchTerm: new FormControl
    })
  }

  test() {
    console.log(this.bigData2[0])
  }

  onSubmit() {
    this.smallData = this.searchForm.value;
    console.log(this.smallData)
    console.log(this.searchForm.value);
    this.databaseService.getInfo(this.searchForm.value).subscribe(data => this.bigData2 = data.results)
  }
}
