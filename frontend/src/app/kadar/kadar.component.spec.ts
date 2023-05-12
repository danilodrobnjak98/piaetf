import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KadarComponent } from './kadar.component';

describe('KadarComponent', () => {
  let component: KadarComponent;
  let fixture: ComponentFixture<KadarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KadarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KadarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
