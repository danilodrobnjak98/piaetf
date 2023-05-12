import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObrisiPredmetComponent } from './obrisi-predmet.component';

describe('ObrisiPredmetComponent', () => {
  let component: ObrisiPredmetComponent;
  let fixture: ComponentFixture<ObrisiPredmetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObrisiPredmetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObrisiPredmetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
