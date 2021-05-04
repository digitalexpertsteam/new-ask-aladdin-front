import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgyptTourComponent } from './egypt-tour.component';

describe('EgyptTourComponent', () => {
  let component: EgyptTourComponent;
  let fixture: ComponentFixture<EgyptTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EgyptTourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EgyptTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
