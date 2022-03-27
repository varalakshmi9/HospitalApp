import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { DocterModel } from './docters.model';

@Component({
  selector: 'app-docters',
  templateUrl: './docters.component.html',
  styleUrls: ['./docters.component.css']
})
export class DoctersComponent implements OnInit {

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
  clickAddDocter() {
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }
  postDocterDetails() {
    this.docterObj.docterName = this.formValue.value.docterName;
    this.docterObj.mobile = this.formValue.value.mobile;
    this.docterObj.age = this.formValue.value.age;
    this.docterObj.gender = this.formValue.value.gender;
    this.docterObj.specialization = this.formValue.value.specialization;

    this.api.postDocter(this.docterObj)
      .subscribe(res => {
        console.log(res);
        alert("Docter added Successfully");
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
        this.getAllDocters();
      },
        err => {
          alert("something went wrong")
        })

  }
 
  onEdit(row: any) {
    this.showAdd = false;
    this.showUpdate = true;
    this.docterObj.id = row.id;
    this.formValue.controls['docterName'].setValue(row.docterName)
    this.formValue.controls['mobile'].setValue(row.mobile)
    this.formValue.controls['age'].setValue(row.age)
    this.formValue.controls['gender'].setValue(row.gender)
    this.formValue.controls['specialization'].setValue(row.specialization);
  }

  updateDocterDetails() {
    this.docterObj.docterName = this.formValue.value.docterName;
    this.docterObj.mobile = this.formValue.value.mobile;
    this.docterObj.age = this.formValue.value.age;
    this.docterObj.gender = this.formValue.value.gender;
    this.docterObj.specialization = this.formValue.value.specialization;

    this.api.updateDocter(this.docterObj, this.docterObj.id)
      .subscribe(res => {
        alert("docter updated Successfully");
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
        this.getAllDocters();
      },
        err => {
          alert("something went wrong")
        })
  }
  getAllDocters() {
    this.api.getDocter()
      .subscribe(res => {
        this.docterData = res;
      })
  }


  deleteDocter(row: any) {
    this.api.deleteDocter(row.id)
      .subscribe(res => {
        alert("Docter Deleted successfully");
        this.getAllDocters();

      })
  }

}
