import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeADepositComponent } from './make-a-deposit.component';

describe('MakeADepositComponent', () => {
  let component: MakeADepositComponent;
  let fixture: ComponentFixture<MakeADepositComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeADepositComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeADepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
