import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-make-a-non-online-deposit-form',
  templateUrl: './make-a-non-online-deposit-form.component.html',
  styleUrls: ['./make-a-non-online-deposit-form.component.scss']
})
export class MakeANonOnlineDepositFormComponent implements OnInit {
  nononlineuserform: FormGroup;
  nononlineenableCheckbox: any = false;
  showdropdownfield: boolean = false;
  paymentCards: any = [{ name: 'Fedex / Western Union / Money Gram' }, { name: 'Crypto Currency' }];
  selectedCardtype: any;
  cryptoValues: any;
  showcard: boolean = false;
  title: any;
  deposit: any;



  constructor(@Inject(MAT_DIALOG_DATA) private data: any, private dialogRef: MatDialogRef<MakeANonOnlineDepositFormComponent>, private formbuilder: FormBuilder) {


  }

  ngOnInit(): void {
    this.showcard = false;
    // this.paymentCards = []
    if (this.data.title !== 'Make a Non Online Deposit') {
      this.title = this.data.title
      this.showdropdownfield = true;
      this.paymentCards = [{ name: 'Fedex / Western Union / Money Gram' }, { name: 'Crypto Currency' }];
      this.deposit = 'Pay Out'
    } else {
      this.title = this.data.title
      this.paymentCards = [{ name: 'Visa / Master Card / AMEX' }, { name: 'Fedex / Western Union / Money Gram' }, { name: 'Crypto Currency' }]
      this.showdropdownfield = false;
      this.deposit = 'Deposit'
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
    this.nononlineuserform = this.formbuilder.group(obj)
  }
  get userFormFields() {
    return this.nononlineuserform.controls;
  }

  sendformdata() {
    console.log(this.nononlineuserform)
  }

  resetForm() {
    this.nononlineuserform.reset();
    this.showcard = false;
    this.cryptoValues = [];
  }
  senddata() {
    console.log('2123')
    this.dialogRef.close('123')
  }

  fieldsChange(evt: any) {
    this.nononlineenableCheckbox = evt.target.checked
    console.log(evt)
  }
  selectedvalue(val: any) {
    this.showcard = false;
    console.log(val)
    this.cryptoValues = [];
    this.nononlineuserform.controls['CardNumber'].clearValidators();
    this.nononlineuserform.controls['CardName'].clearValidators();
    this.nononlineuserform.controls['CVV'].clearValidators();
    this.nononlineuserform.controls['ExpirationDate'].clearValidators();
    if (val === 'Crypto Currency') {
      this.cryptoValues = [{ name: 'Bitcoin' }, { name: 'Etherium' }, { name: 'USDT' }, { name: 'USDC' }, { name: 'XRP' }, { name: 'Cardano' }, { name: 'Dogcoin' }, { name: 'Solana' }, { name: 'Litecoin' }, { name: 'Tron' },]
    } else if (val === 'Visa / Master Card / AMEX') {
      this.showcard = true;
      console.log('123')
      // this.userform.get('CardNumber').addValidators(Validators.required)
      this.nononlineuserform.controls['CardNumber'].setValidators([Validators.required])
      this.nononlineuserform.controls['CardNumber'].updateValueAndValidity();

      this.nononlineuserform.controls['CardName'].setValidators([Validators.required])
      this.nononlineuserform.controls['CardName'].updateValueAndValidity();

      this.nononlineuserform.controls['CVV'].setValidators([Validators.required])
      this.nononlineuserform.controls['CVV'].updateValueAndValidity();

      this.nononlineuserform.controls['ExpirationDate'].setValidators([Validators.required])
      this.nononlineuserform.controls['ExpirationDate'].updateValueAndValidity();
    }
  }

}
