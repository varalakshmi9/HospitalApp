import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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


const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'patients', component: PatientsComponent },
  { path: 'docters', component: DoctersComponent },
  { path: 'booking-appointment', component: BookingAppointmentComponent },
  { path: 'patient-login', component: PatientLoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'patient-info', component: UserNavForPatientInfoComponent },
  { path: 'docter-info', component: UserNavForDocterInfoComponent },
  { path: 'show-docter-info', component: ShowDocterInfoComponent },
  { path: 'show-patient-info', component: ShowPatientInfoComponent },
  { path: 'patient-signup', component: PatientSignupComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
