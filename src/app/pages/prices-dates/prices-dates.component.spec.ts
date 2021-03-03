import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricesDatesComponent } from './prices-dates.component';

describe('PricesDatesComponent', () => {
  let component: PricesDatesComponent;
  let fixture: ComponentFixture<PricesDatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricesDatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricesDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
