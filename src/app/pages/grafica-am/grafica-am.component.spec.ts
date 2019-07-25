import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaAmComponent } from './grafica-am.component';

describe('GraficaAmComponent', () => {
  let component: GraficaAmComponent;
  let fixture: ComponentFixture<GraficaAmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficaAmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaAmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
