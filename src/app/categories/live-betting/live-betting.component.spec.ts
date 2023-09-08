import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveBettingComponent } from './live-betting.component';

describe('LiveBettingComponent', () => {
  let component: LiveBettingComponent;
  let fixture: ComponentFixture<LiveBettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveBettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveBettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
