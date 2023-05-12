import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiPredmetiComponent } from './si-predmeti.component';

describe('SiPredmetiComponent', () => {
  let component: SiPredmetiComponent;
  let fixture: ComponentFixture<SiPredmetiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiPredmetiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiPredmetiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
