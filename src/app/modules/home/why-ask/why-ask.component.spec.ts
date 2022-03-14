import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyAskComponent } from './why-ask.component';

describe('WhyAskComponent', () => {
  let component: WhyAskComponent;
  let fixture: ComponentFixture<WhyAskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyAskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyAskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
