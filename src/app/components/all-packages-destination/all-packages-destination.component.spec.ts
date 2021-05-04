import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPackagesDestinationComponent } from './all-packages-destination.component';

describe('AllPackagesDestinationComponent', () => {
  let component: AllPackagesDestinationComponent;
  let fixture: ComponentFixture<AllPackagesDestinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPackagesDestinationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPackagesDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
