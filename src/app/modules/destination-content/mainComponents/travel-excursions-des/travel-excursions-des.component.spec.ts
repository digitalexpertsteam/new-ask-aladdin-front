import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelExcursionsDesComponent } from './travel-excursions-des.component';

describe('TravelExcursionsDesComponent', () => {
  let component: TravelExcursionsDesComponent;
  let fixture: ComponentFixture<TravelExcursionsDesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelExcursionsDesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelExcursionsDesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
