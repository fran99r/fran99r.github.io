import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Separador1Component } from './separador1.component';

describe('Separador1Component', () => {
  let component: Separador1Component;
  let fixture: ComponentFixture<Separador1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Separador1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Separador1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
