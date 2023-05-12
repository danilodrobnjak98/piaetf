import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjektiPonudeComponent } from './projekti-ponude.component';

describe('ProjektiPonudeComponent', () => {
  let component: ProjektiPonudeComponent;
  let fixture: ComponentFixture<ProjektiPonudeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjektiPonudeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjektiPonudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
