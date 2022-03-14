import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleExcursionComponent } from './single-excursion.component';

describe('SingleExcursionComponent', () => {
  let component: SingleExcursionComponent;
  let fixture: ComponentFixture<SingleExcursionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleExcursionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleExcursionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
