import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNavForPatientInfoComponent } from './user-nav-for-patient-info.component';

describe('UserNavForPatientInfoComponent', () => {
  let component: UserNavForPatientInfoComponent;
  let fixture: ComponentFixture<UserNavForPatientInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserNavForPatientInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNavForPatientInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
