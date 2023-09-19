import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositPoliciesComponent } from './deposit-policies.component';

describe('DepositPoliciesComponent', () => {
  let component: DepositPoliciesComponent;
  let fixture: ComponentFixture<DepositPoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositPoliciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
