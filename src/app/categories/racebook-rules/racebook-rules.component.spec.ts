import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacebookRulesComponent } from './racebook-rules.component';

describe('RacebookRulesComponent', () => {
  let component: RacebookRulesComponent;
  let fixture: ComponentFixture<RacebookRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RacebookRulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RacebookRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
