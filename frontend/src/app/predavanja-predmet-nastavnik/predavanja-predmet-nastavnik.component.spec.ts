import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredavanjaPredmetNastavnikComponent } from './predavanja-predmet-nastavnik.component';

describe('PredavanjaPredmetNastavnikComponent', () => {
  let component: PredavanjaPredmetNastavnikComponent;
  let fixture: ComponentFixture<PredavanjaPredmetNastavnikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredavanjaPredmetNastavnikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredavanjaPredmetNastavnikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
