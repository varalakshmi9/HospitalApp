import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-appointment',
  templateUrl: './booking-appointment.component.html',
  styleUrls: ['./booking-appointment.component.css']
})
export class BookingAppointmentComponent implements OnInit {

  public submitForm!: FormGroup
  selectedDocter: any = ['dentist', 'cardiologist', 'physician', 'Eye-specialist','Gynacolagist']
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.submitForm = this.formBuilder.group({
      patientName: [''],
      mobile: [''],
      appointmentDate: [''],
      appointmentTime: [''],
      selectedDocter: ['', Validators.required]
    })
  }
  changeDoctor(e: any) {
    this.selectedDocter?.setValue(e.targert.value, {
      onlySelf: true,
    });
  }
  get selectedDoctor() {
    return this.selectedDocter.get('selectedDocter')
  }
  submit() {
    this.http.post<any>("http://localhost:8090/patients", this.submitForm.value)
      .subscribe(res => {
        alert("submitted successfully");
        this.submitForm.reset();
        this.router.navigate(["patient-info"]);
      }, err => {
        alert("something went wrong")
      })
  }


}
