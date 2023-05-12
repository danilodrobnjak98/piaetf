import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IzmeniPObavestenjeComponent } from './izmeni-pobavestenje.component';

describe('IzmeniPObavestenjeComponent', () => {
  let component: IzmeniPObavestenjeComponent;
  let fixture: ComponentFixture<IzmeniPObavestenjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IzmeniPObavestenjeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IzmeniPObavestenjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
