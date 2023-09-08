import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorseRacingComponent } from './horse-racing.component';

describe('HorseRacingComponent', () => {
  let component: HorseRacingComponent;
  let fixture: ComponentFixture<HorseRacingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorseRacingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorseRacingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
