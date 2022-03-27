import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { DocterModel } from './docters.model';

@Component({
  selector: 'app-user-nav-for-docter-info',
  templateUrl: './user-nav-for-docter-info.component.html',
  styleUrls: ['./user-nav-for-docter-info.component.css']
})
export class UserNavForDocterInfoComponent implements OnInit {

  public formValue!: FormGroup;
  docterObj: DocterModel = new DocterModel();
  docterData!: any;
  showAdd!: boolean;
  showUpdate!: boolean;
  filterTerm!: string;
  constructor(private formBuilder: FormBuilder, private api: ApiService) {
  }
  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      docterName: [''],
      mobile: [''],
      age: [''],
      gender: ['', Validators.required],
      specialization: ['']
    })
    this.getAllDocters();
  }
  getAllDocters() {
    this.api.getDocter()
      .subscribe(res => {
        this.docterData = res;
      })
  }


}
