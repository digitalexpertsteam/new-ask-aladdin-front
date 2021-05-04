import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedToursComponent } from './related-tours.component';

describe('RelatedToursComponent', () => {
  let component: RelatedToursComponent;
  let fixture: ComponentFixture<RelatedToursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatedToursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
