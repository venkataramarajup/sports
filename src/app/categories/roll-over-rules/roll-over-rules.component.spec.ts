import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RollOverRulesComponent } from './roll-over-rules.component';

describe('RollOverRulesComponent', () => {
  let component: RollOverRulesComponent;
  let fixture: ComponentFixture<RollOverRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RollOverRulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RollOverRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
