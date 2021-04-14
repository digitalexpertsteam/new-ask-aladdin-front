import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleExcursionsComponent } from './single-excursions.component';

describe('SingleExcursionsComponent', () => {
  let component: SingleExcursionsComponent;
  let fixture: ComponentFixture<SingleExcursionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleExcursionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleExcursionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
