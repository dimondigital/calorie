import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosePageButtonComponent } from './close-page-button.component';

describe('ClosePageButtonComponent', () => {
  let component: ClosePageButtonComponent;
  let fixture: ComponentFixture<ClosePageButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClosePageButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosePageButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
