import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelFactsDesComponent } from './travel-facts-des.component';

describe('TravelFactsDesComponent', () => {
  let component: TravelFactsDesComponent;
  let fixture: ComponentFixture<TravelFactsDesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelFactsDesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelFactsDesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
