import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayoutPoliciesComponent } from './payout-policies.component';

describe('PayoutPoliciesComponent', () => {
  let component: PayoutPoliciesComponent;
  let fixture: ComponentFixture<PayoutPoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayoutPoliciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayoutPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
