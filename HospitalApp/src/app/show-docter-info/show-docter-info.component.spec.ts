import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDocterInfoComponent } from './show-docter-info.component';

describe('ShowDocterInfoComponent', () => {
  let component: ShowDocterInfoComponent;
  let fixture: ComponentFixture<ShowDocterInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDocterInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDocterInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
