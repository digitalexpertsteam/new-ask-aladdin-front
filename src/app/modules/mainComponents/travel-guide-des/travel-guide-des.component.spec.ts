import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelGuideDesComponent } from './travel-guide-des.component';

describe('TravelGuideDesComponent', () => {
  let component: TravelGuideDesComponent;
  let fixture: ComponentFixture<TravelGuideDesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelGuideDesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelGuideDesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
