import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtiPredmetiComponent } from './rti-predmeti.component';

describe('RtiPredmetiComponent', () => {
  let component: RtiPredmetiComponent;
  let fixture: ComponentFixture<RtiPredmetiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RtiPredmetiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RtiPredmetiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
