import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDestintionsComponent } from './all-destintions.component';

describe('AllDestintionsComponent', () => {
  let component: AllDestintionsComponent;
  let fixture: ComponentFixture<AllDestintionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllDestintionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDestintionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
