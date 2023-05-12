import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredmetiPracenjeComponent } from './predmeti-pracenje.component';

describe('PredmetiPracenjeComponent', () => {
  let component: PredmetiPracenjeComponent;
  let fixture: ComponentFixture<PredmetiPracenjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredmetiPracenjeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredmetiPracenjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
