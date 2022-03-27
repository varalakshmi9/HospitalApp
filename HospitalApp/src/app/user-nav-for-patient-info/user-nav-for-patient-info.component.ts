import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { PatientModel } from './patient.model';

@Component({
  selector: 'app-user-nav-for-patient-info',
  templateUrl: './user-nav-for-patient-info.component.html',
  styleUrls: ['./user-nav-for-patient-info.component.css']
})
export class UserNavForPatientInfoComponent implements OnInit {

  public formValue!: FormGroup;
  patientObj: PatientModel = new PatientModel();
  patientData!: any;
  selectedDocter: any = ['John', 'Peter', 'Thomas', 'Andria', 'Sumith']
  constructor(private formBuilder: FormBuilder, private api: ApiService) {
  }
  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      patientName: [''],
      mobile: [''],
      appointmentDate: [''],
      appointmentTime: [''],
      selectedDocter: ['', Validators.required]
    })
    this.getAllPatients();
  }
  changeDoctor(e: any) {
    this.selectedDocter?.setValue(e.targert.value, {
      onlySelf: true,
    });
  }
  get selectedDoctor() {
    return this.selectedDocter.get('selectedDocter')
  }
  getAllPatients() {
    this.api.getPatient()
      .subscribe(res => {
        this.patientData = res;
      })
  }

}
