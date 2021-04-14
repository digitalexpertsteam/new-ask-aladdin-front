import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleGuideComponent } from './single-guide.component';

describe('SingleGuideComponent', () => {
  let component: SingleGuideComponent;
  let fixture: ComponentFixture<SingleGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
