import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctersComponent } from './docters.component';

describe('DoctersComponent', () => {
  let component: DoctersComponent;
  let fixture: ComponentFixture<DoctersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
