import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNavForDocterInfoComponent } from './user-nav-for-docter-info.component';

describe('UserNavForDocterInfoComponent', () => {
  let component: UserNavForDocterInfoComponent;
  let fixture: ComponentFixture<UserNavForDocterInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserNavForDocterInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNavForDocterInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
