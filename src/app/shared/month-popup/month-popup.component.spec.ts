import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthPopupComponent } from './month-popup.component';

describe('MonthPopupComponent', () => {
  let component: MonthPopupComponent;
  let fixture: ComponentFixture<MonthPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
