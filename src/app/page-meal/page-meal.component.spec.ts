import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMealComponent } from './page-meal.component';

describe('PageMealComponent', () => {
  let component: PageMealComponent;
  let fixture: ComponentFixture<PageMealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
