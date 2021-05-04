import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLinksComponent } from './page-links.component';

describe('PageLinksComponent', () => {
  let component: PageLinksComponent;
  let fixture: ComponentFixture<PageLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageLinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
