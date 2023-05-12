import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OstaliPredmetiComponent } from './ostali-predmeti.component';

describe('OstaliPredmetiComponent', () => {
  let component: OstaliPredmetiComponent;
  let fixture: ComponentFixture<OstaliPredmetiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OstaliPredmetiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OstaliPredmetiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
