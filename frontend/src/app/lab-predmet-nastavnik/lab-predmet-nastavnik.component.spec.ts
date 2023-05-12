import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabPredmetNastavnikComponent } from './lab-predmet-nastavnik.component';

describe('LabPredmetNastavnikComponent', () => {
  let component: LabPredmetNastavnikComponent;
  let fixture: ComponentFixture<LabPredmetNastavnikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabPredmetNastavnikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabPredmetNastavnikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
