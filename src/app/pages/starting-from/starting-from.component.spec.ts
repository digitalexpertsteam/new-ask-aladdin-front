import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartingFromComponent } from './starting-from.component';

describe('StartingFromComponent', () => {
  let component: StartingFromComponent;
  let fixture: ComponentFixture<StartingFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartingFromComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartingFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
