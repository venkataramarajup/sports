import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveBettingRulesComponent } from './live-betting-rules.component';

describe('LiveBettingRulesComponent', () => {
  let component: LiveBettingRulesComponent;
  let fixture: ComponentFixture<LiveBettingRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveBettingRulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveBettingRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
