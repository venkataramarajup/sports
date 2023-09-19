import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpCenterCategoryComponent } from './help-center-category.component';

describe('HelpCenterCategoryComponent', () => {
  let component: HelpCenterCategoryComponent;
  let fixture: ComponentFixture<HelpCenterCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpCenterCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpCenterCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
