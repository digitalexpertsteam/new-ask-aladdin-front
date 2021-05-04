import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoreyFooterComponent } from './categorey-footer.component';

describe('CategoreyFooterComponent', () => {
  let component: CategoreyFooterComponent;
  let fixture: ComponentFixture<CategoreyFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoreyFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoreyFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
