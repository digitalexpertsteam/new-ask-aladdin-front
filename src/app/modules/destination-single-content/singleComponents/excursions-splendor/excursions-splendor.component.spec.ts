import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcursionsSplendorComponent } from './excursions-splendor.component';

describe('ExcursionsSplendorComponent', () => {
  let component: ExcursionsSplendorComponent;
  let fixture: ComponentFixture<ExcursionsSplendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcursionsSplendorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcursionsSplendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
