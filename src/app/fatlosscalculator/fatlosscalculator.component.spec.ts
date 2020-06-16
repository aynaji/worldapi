import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FatlosscalculatorComponent } from './fatlosscalculator.component';

describe('FatlosscalculatorComponent', () => {
  let component: FatlosscalculatorComponent;
  let fixture: ComponentFixture<FatlosscalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FatlosscalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FatlosscalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
