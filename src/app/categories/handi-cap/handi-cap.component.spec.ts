import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandiCapComponent } from './handi-cap.component';

describe('HandiCapComponent', () => {
  let component: HandiCapComponent;
  let fixture: ComponentFixture<HandiCapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandiCapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandiCapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
