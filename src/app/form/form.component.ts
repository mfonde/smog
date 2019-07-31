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
  smallData = ''; // has searchType
  bigData2 = [];
  bigDataBaby=[];

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
    this.bigDataBaby = this.bigData2[0]
  }

  onSubmit() {
    this.smallData = this.searchForm.value.searchType;

    console.log(this.searchForm.value.searchType);
    this.databaseService.getInfo(this.searchForm.value).subscribe(data => this.bigData2 = data.results)
    this.test()
  }


}
