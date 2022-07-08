import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APopupComponent } from './a-popup.component';

describe('APopupComponent', () => {
  let component: APopupComponent;
  let fixture: ComponentFixture<APopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ APopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(APopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
