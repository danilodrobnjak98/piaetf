import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterPredmetiComponent } from './master-predmeti.component';

describe('MasterPredmetiComponent', () => {
  let component: MasterPredmetiComponent;
  let fixture: ComponentFixture<MasterPredmetiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterPredmetiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterPredmetiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
