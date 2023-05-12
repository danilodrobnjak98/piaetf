import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPredmetNastavnikComponent } from './info-predmet-nastavnik.component';

describe('InfoPredmetNastavnikComponent', () => {
  let component: InfoPredmetNastavnikComponent;
  let fixture: ComponentFixture<InfoPredmetNastavnikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoPredmetNastavnikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPredmetNastavnikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
