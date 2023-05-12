import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromenaLozinkeKorisnilkComponent } from './promena-lozinke-korisnilk.component';

describe('PromenaLozinkeKorisnilkComponent', () => {
  let component: PromenaLozinkeKorisnilkComponent;
  let fixture: ComponentFixture<PromenaLozinkeKorisnilkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromenaLozinkeKorisnilkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromenaLozinkeKorisnilkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
