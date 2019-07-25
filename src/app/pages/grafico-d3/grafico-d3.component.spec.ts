import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoD3Component } from './grafico-d3.component';

describe('GraficoD3Component', () => {
  let component: GraficoD3Component;
  let fixture: ComponentFixture<GraficoD3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoD3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoD3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
