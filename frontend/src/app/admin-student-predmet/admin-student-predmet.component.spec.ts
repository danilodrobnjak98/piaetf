import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStudentPredmetComponent } from './admin-student-predmet.component';

describe('AdminStudentPredmetComponent', () => {
  let component: AdminStudentPredmetComponent;
  let fixture: ComponentFixture<AdminStudentPredmetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminStudentPredmetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStudentPredmetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
