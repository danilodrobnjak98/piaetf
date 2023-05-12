import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObrisiPredmetObavestenjeComponent } from './obrisi-predmet-obavestenje.component';

describe('ObrisiPredmetObavestenjeComponent', () => {
  let component: ObrisiPredmetObavestenjeComponent;
  let fixture: ComponentFixture<ObrisiPredmetObavestenjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObrisiPredmetObavestenjeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObrisiPredmetObavestenjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
