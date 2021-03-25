import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelHotelsDesComponent } from './travel-hotels-des.component';

describe('TravelHotelsDesComponent', () => {
  let component: TravelHotelsDesComponent;
  let fixture: ComponentFixture<TravelHotelsDesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelHotelsDesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelHotelsDesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
