import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IzmenaObavestenjaComponent } from './izmena-obavestenja.component';

describe('IzmenaObavestenjaComponent', () => {
  let component: IzmenaObavestenjaComponent;
  let fixture: ComponentFixture<IzmenaObavestenjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IzmenaObavestenjaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IzmenaObavestenjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
