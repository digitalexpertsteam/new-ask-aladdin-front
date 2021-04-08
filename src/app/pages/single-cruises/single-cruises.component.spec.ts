import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCruisesComponent } from './single-cruises.component';

describe('SingleCruisesComponent', () => {
  let component: SingleCruisesComponent;
  let fixture: ComponentFixture<SingleCruisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleCruisesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCruisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
