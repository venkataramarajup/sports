import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeANonOnlineDepositFormComponent } from './make-a-non-online-deposit-form.component';

describe('MakeANonOnlineDepositFormComponent', () => {
  let component: MakeANonOnlineDepositFormComponent;
  let fixture: ComponentFixture<MakeANonOnlineDepositFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeANonOnlineDepositFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeANonOnlineDepositFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
