import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgyptSplendorComponent } from './egypt-splendor.component';

describe('EgyptSplendorComponent', () => {
  let component: EgyptSplendorComponent;
  let fixture: ComponentFixture<EgyptSplendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EgyptSplendorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EgyptSplendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
