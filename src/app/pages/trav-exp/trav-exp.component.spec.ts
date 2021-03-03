import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravExpComponent } from './trav-exp.component';

describe('TravExpComponent', () => {
  let component: TravExpComponent;
  let fixture: ComponentFixture<TravExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravExpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
