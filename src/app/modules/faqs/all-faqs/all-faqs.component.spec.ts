import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFaqsComponent } from './all-faqs.component';

describe('AllFaqsComponent', () => {
  let component: AllFaqsComponent;
  let fixture: ComponentFixture<AllFaqsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllFaqsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllFaqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
