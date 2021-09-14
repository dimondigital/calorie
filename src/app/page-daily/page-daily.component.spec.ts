import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDailyComponent } from './page-daily.component';

describe('PageDailyComponent', () => {
  let component: PageDailyComponent;
  let fixture: ComponentFixture<PageDailyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDailyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
