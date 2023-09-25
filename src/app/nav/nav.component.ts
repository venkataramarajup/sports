import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MakeADepositFormComponent } from '../Dialog-boxes/make-a-deposit-form/make-a-deposit-form.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MakeADepositComponent } from '../Dialog-boxes/make-a-deposit/make-a-deposit.component';
import { MakeANonOnlineDepositFormComponent } from '../Dialog-boxes/make-a-non-online-deposit-form/make-a-non-online-deposit-form.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @ViewChild('closeBtn') closeBtn: ElementRef;
  @ViewChild('myModal') myModal: any;
  userform: FormGroup;

  // formDialogRef: MatDialogRef<MakeADepositComponent>;
  // payformDialogRef: MatDialogRef<MakeADepositFormComponent>;

  constructor(private dialog: MatDialog, private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    // this.openform()
    this.buildform();
    this.buildnononlineform();
    this.paymentCards = [{ name: 'Fedex / Western Union / Money Gram' }, { name: 'Crypto Currency' }]
  }

  title: any;
  subtitle: any
  button1: any;
  showpayoutform: boolean = false;
  openMakeADepositdialog(type: any) {
    this.showpayoutform = true;
    let dialogRef
    if (type === 'Deposit') {
      this.title = 'Make a Deposit',
        this.subtitle = 'Online Deposit Methods',
        this.button1 = 'Make a Non Online Deposit'
      // dialogRef = this.dialog.open(MakeADepositComponent, {
      //   data: {
      //     title: 'Make a Deposit',
      //     SubTitle: 'Online Deposit Methods',
      //     button1: 'Make a Non Online Deposit'
      //   }
      // })
    } else {
      this.title = 'Request a Pay Out',
        this.subtitle = 'Online Pay Out Methods',
        this.button1 = 'Request a Non Online Pay Out'
      // dialogRef = this.dialog.open(MakeADepositComponent, {
      //   data: {
      //     title: 'Request a Pay Out',
      //     SubTitle: 'Online Pay Out Methods',
      //     button1: 'Request a Non Online Pay Out'
      //   }
      // })
    }

    // dialogRef.afterClosed().subscribe(data => {
    //   if (data) {
    //     console.log(data)
    //   }

    // })
  }
  buttonclicked(title: any, btnname: any) {

    console.log(title, btnname)
    if (btnname === 'CashApp' || btnname === 'PayPal' || btnname === 'Zelle' || btnname === 'venmo') {
      if (title === 'Make a Deposit') {
        this.openform('Make an Online Deposit');
      } else if (title === 'Request a Pay Out') {
        this.openform('Request an Online Pay Out');
      }

    } else if (btnname === 'Make a Non Online Deposit') {
      this.opennononlinedialog('Make a Non Online Deposit')

    } else if (btnname === 'Request a Non Online Pay Out') {
      this.opennononlinedialog('Request a Non Online Pay Out')
    }
    this.closeModal();


  }

  // openModel() {
  //   this.myModal.nativeElement.className = 'modal fade show';
  //    this.myModal.nativeElement.className = 'modal hide';
  // }

  closeModal(): void {
    this.closeBtn.nativeElement.click();
  }

  openform(title: any) {
    const dialogRef = this.dialog.open(MakeADepositFormComponent, {
      data: {
        title: title,
        SubTitle: 'Online Deposit Methods'
      }
    })
    dialogRef.afterClosed().subscribe((data: any) => {
      console.log(data)
    })
  }

  opennononlinedialog(title: any) {
    const dialogRef = this.dialog.open(MakeANonOnlineDepositFormComponent, {
      data: {
        title: title,
        SubTitle: 'Online Deposit Methods'
      }
    })
    dialogRef.afterClosed().subscribe((data: any) => {
      console.log(data)
    })
  }

  enableCheckbox: any = false;
  buildform() {
    let obj: any = {
      FirstName: ['', [Validators.required]],
      LastName: ['', [Validators.required]],
      PhoneNumber: ['', [Validators.required]],
      Email: ['', [Validators.required]],
      AccountName: ['', [Validators.required]],
      Amount: ['', [Validators.required]]
    }
    this.userform = this.formbuilder.group(obj)
  }
  get userFormFields() {
    return this.userform.controls;
  }

  sendformdata() {
    console.log(this.userform)
  }
  fieldsChange(evt: any) {
    this.enableCheckbox = evt.target.checked
    console.log(evt)
  }
  senddata() {
    console.log('2123')
    console.log(this.userform)
  }



  /* Non online payment code */
  nononlineuserform: FormGroup;
  nononlineenableCheckbox: any = false;
  showdropdownfield: boolean = false;
  paymentCards: any = [{ name: 'Fedex / Western Union / Money Gram' }, { name: 'Crypto Currency' }];
  selectedCardtype: any;
  cryptoValues: any;
  showcard: boolean = false;

  buildnononlineform() {
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
  get nononlineuserFormFields() {
    return this.nononlineuserform.controls;
  }

  sendnononlineformdata() {
    console.log(this.nononlineuserform)
  }
  resetForm() {
    this.userform.reset();
    this.nononlineuserform.reset();
    this.showcard = false;
    this.cryptoValues = [];
  }

  sendnononlinedata() {
    console.log('2123')
    console.log(this.nononlineuserform)
  }
  nononlinefieldsChange(evt: any) {
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
      // this.nononlineuserform.get('CardNumber').addValidators(Validators.required)
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
