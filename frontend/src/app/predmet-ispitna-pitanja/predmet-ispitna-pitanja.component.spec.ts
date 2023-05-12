import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredmetIspitnaPitanjaComponent } from './predmet-ispitna-pitanja.component';

describe('PredmetIspitnaPitanjaComponent', () => {
  let component: PredmetIspitnaPitanjaComponent;
  let fixture: ComponentFixture<PredmetIspitnaPitanjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredmetIspitnaPitanjaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredmetIspitnaPitanjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
