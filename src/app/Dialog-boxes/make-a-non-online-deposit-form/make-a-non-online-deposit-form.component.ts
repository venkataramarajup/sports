import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-make-a-non-online-deposit-form',
  templateUrl: './make-a-non-online-deposit-form.component.html',
  styleUrls: ['./make-a-non-online-deposit-form.component.scss']
})
export class MakeANonOnlineDepositFormComponent implements OnInit {
  userform: FormGroup;
  enableCheckbox: any = false;
  showdropdownfield: boolean = false;
  paymentCards: any = [{ name: 'Fedex / Western Union / Money Gram' }, { name: 'Crypto Currency' }];
  selectedCardtype: any;
  cryptoValues: any;
  showcard: boolean = false;
  title: any;


  constructor(@Inject(MAT_DIALOG_DATA) private data: any, private dialogRef: MatDialogRef<MakeANonOnlineDepositFormComponent>, private formbuilder: FormBuilder) {


  }

  ngOnInit(): void {
    this.showcard = false;
    // this.paymentCards = []
    if (this.data.title !== 'Make a Non Online Deposit') {
      this.title = this.data.title
      this.showdropdownfield = true;
      this.paymentCards = [{ name: 'Fedex / Western Union / Money Gram' }, { name: 'Crypto Currency' }]
    } else {
      this.title = this.data.title
      this.paymentCards = [{ name: 'Visa / Master Card / AMEX' }, { name: 'Fedex / Western Union / Money Gram' }, { name: 'Crypto Currency' }]
      this.showdropdownfield = false;
    }
    this.buildform()
    // this.ownerForm = new FormGroup({
    //   name: new FormControl('', [Validators.required, Validators.maxLength(60)]),
    //   dateOfBirth: new FormControl(new Date()),
    //   address: new FormControl('', [Validators.required, Validators.maxLength(100)])
    // });
  }

  buildform() {
    let obj: any = {
      FirstName: ['', [Validators.required]],
      LastName: ['', [Validators.required]],
      PhoneNumber: ['', [Validators.required]],
      Email: ['', [Validators.required]],
      AccountName: ['', [Validators.required]],
      Amount: ['', [Validators.required]],
      PaymentType: ['', [Validators.required]],
      CardNumber: [''],
      CardName: [''],
      CVV: [''],
      ExpirationDate: ['']
    }
    this.userform = this.formbuilder.group(obj)
  }
  get userFormFields() {
    return this.userform.controls;
  }

  sendformdata() {
    console.log(this.userform)
  }

  resetForm() {
    this.userform.reset();
    this.showcard = false;
    this.cryptoValues = [];
  }
  senddata() {
    console.log('2123')
    this.dialogRef.close('123')
  }

  fieldsChange(evt: any) {
    this.enableCheckbox = evt.target.checked
    console.log(evt)
  }
  selectedvalue(val: any) {
    this.showcard = false;
    console.log(val)
    this.cryptoValues = [];
    this.userform.controls['CardNumber'].clearValidators();
    this.userform.controls['CardName'].clearValidators();
    this.userform.controls['CVV'].clearValidators();
    this.userform.controls['ExpirationDate'].clearValidators();
    if (val === 'Crypto Currency') {
      this.cryptoValues = [{ name: 'Bitcoin' }, { name: 'Etherium' }, { name: 'USDT' }, { name: 'USDC' }, { name: 'XRP' }, { name: 'Cardano' }, { name: 'Dogcoin' }, { name: 'Solana' }, { name: 'Litecoin' }, { name: 'Tron' },]
    } else if (val === 'Visa / Master Card / AMEX') {
      this.showcard = true;
      console.log('123')
      // this.userform.get('CardNumber').addValidators(Validators.required)
      this.userform.controls['CardNumber'].setValidators([Validators.required])
      this.userform.controls['CardNumber'].updateValueAndValidity();

      this.userform.controls['CardName'].setValidators([Validators.required])
      this.userform.controls['CardName'].updateValueAndValidity();

      this.userform.controls['CVV'].setValidators([Validators.required])
      this.userform.controls['CVV'].updateValueAndValidity();

      this.userform.controls['ExpirationDate'].setValidators([Validators.required])
      this.userform.controls['ExpirationDate'].updateValueAndValidity();
    }
  }

}
