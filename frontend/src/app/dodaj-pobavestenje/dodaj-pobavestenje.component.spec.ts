import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajPObavestenjeComponent } from './dodaj-pobavestenje.component';

describe('DodajPObavestenjeComponent', () => {
  let component: DodajPObavestenjeComponent;
  let fixture: ComponentFixture<DodajPObavestenjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DodajPObavestenjeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajPObavestenjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
