import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsExcursionsComponent } from './tags-excursions.component';

describe('TagsExcursionsComponent', () => {
  let component: TagsExcursionsComponent;
  let fixture: ComponentFixture<TagsExcursionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagsExcursionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagsExcursionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
