import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VezbePredmetNastavnikComponent } from './vezbe-predmet-nastavnik.component';

describe('VezbePredmetNastavnikComponent', () => {
  let component: VezbePredmetNastavnikComponent;
  let fixture: ComponentFixture<VezbePredmetNastavnikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VezbePredmetNastavnikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VezbePredmetNastavnikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
