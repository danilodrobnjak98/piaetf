import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredmetNastavnikComponent } from './predmet-nastavnik.component';

describe('PredmetNastavnikComponent', () => {
  let component: PredmetNastavnikComponent;
  let fixture: ComponentFixture<PredmetNastavnikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredmetNastavnikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredmetNastavnikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
