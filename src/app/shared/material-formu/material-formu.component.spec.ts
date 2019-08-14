import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialFormuComponent } from './material-formu.component';

describe('MaterialFormuComponent', () => {
  let component: MaterialFormuComponent;
  let fixture: ComponentFixture<MaterialFormuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialFormuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialFormuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
