import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrijavaPredmetaComponent } from './prijava-predmeta.component';

describe('PrijavaPredmetaComponent', () => {
  let component: PrijavaPredmetaComponent;
  let fixture: ComponentFixture<PrijavaPredmetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrijavaPredmetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrijavaPredmetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
