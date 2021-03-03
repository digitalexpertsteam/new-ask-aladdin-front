import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorssComponent } from './sponsorss.component';

describe('SponsorssComponent', () => {
  let component: SponsorssComponent;
  let fixture: ComponentFixture<SponsorssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SponsorssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
