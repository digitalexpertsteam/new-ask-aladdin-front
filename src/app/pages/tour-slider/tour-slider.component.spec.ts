import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourSliderComponent } from './tour-slider.component';

describe('TourSliderComponent', () => {
  let component: TourSliderComponent;
  let fixture: ComponentFixture<TourSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TourSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
