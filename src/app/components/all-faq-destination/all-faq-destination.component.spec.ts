import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFaqDestinationComponent } from './all-faq-destination.component';

describe('AllFaqDestinationComponent', () => {
  let component: AllFaqDestinationComponent;
  let fixture: ComponentFixture<AllFaqDestinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllFaqDestinationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllFaqDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
