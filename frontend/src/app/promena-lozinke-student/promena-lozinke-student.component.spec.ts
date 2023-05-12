import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromenaLozinkeStudentComponent } from './promena-lozinke-student.component';

describe('PromenaLozinkeStudentComponent', () => {
  let component: PromenaLozinkeStudentComponent;
  let fixture: ComponentFixture<PromenaLozinkeStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromenaLozinkeStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromenaLozinkeStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
