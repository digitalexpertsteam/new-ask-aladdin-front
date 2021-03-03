import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationBlogComponent } from './destination-blog.component';

describe('DestinationBlogComponent', () => {
  let component: DestinationBlogComponent;
  let fixture: ComponentFixture<DestinationBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinationBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
