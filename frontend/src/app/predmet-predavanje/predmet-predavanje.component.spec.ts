import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredmetPredavanjeComponent } from './predmet-predavanje.component';

describe('PredmetPredavanjeComponent', () => {
  let component: PredmetPredavanjeComponent;
  let fixture: ComponentFixture<PredmetPredavanjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredmetPredavanjeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredmetPredavanjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
