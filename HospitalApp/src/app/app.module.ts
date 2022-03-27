import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { BookingAppointmentComponent } from './booking-appointment/booking-appointment.component';
import { DoctersComponent } from './docters/docters.component';
import { HomeComponent } from './home/home.component';
import { PatientLoginComponent } from './patient-login/patient-login.component';
import { PatientSignupComponent } from './patient-signup/patient-signup.component';
import { PatientsComponent } from './patients/patients.component';
import { ShowDocterInfoComponent } from './show-docter-info/show-docter-info.component';
import { ShowPatientInfoComponent } from './show-patient-info/show-patient-info.component';
import { UserNavForDocterInfoComponent } from './user-nav-for-docter-info/user-nav-for-docter-info.component';
import { UserNavForPatientInfoComponent } from './user-nav-for-patient-info/user-nav-for-patient-info.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    BookingAppointmentComponent,
    DoctersComponent,
    HomeComponent,
    PatientLoginComponent,
    PatientSignupComponent,
    PatientsComponent,
    ShowDocterInfoComponent,
    ShowPatientInfoComponent,
    UserNavForDocterInfoComponent,
    UserNavForPatientInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
