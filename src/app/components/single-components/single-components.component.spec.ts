import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleComponentsComponent } from './single-components.component';

describe('SingleComponentsComponent', () => {
  let component: SingleComponentsComponent;
  let fixture: ComponentFixture<SingleComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
