import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelCruisesDesComponent } from './travel-cruises-des.component';

describe('TravelCruisesDesComponent', () => {
  let component: TravelCruisesDesComponent;
  let fixture: ComponentFixture<TravelCruisesDesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelCruisesDesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelCruisesDesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
