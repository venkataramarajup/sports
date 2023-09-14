import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeADepositFormComponent } from './make-a-deposit-form.component';

describe('MakeADepositFormComponent', () => {
  let component: MakeADepositFormComponent;
  let fixture: ComponentFixture<MakeADepositFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeADepositFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeADepositFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
