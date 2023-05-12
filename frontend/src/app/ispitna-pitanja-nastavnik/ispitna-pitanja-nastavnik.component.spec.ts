import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IspitnaPitanjaNastavnikComponent } from './ispitna-pitanja-nastavnik.component';

describe('IspitnaPitanjaNastavnikComponent', () => {
  let component: IspitnaPitanjaNastavnikComponent;
  let fixture: ComponentFixture<IspitnaPitanjaNastavnikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IspitnaPitanjaNastavnikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IspitnaPitanjaNastavnikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
