import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MakeADepositFormComponent } from '../Dialog-boxes/make-a-deposit-form/make-a-deposit-form.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MakeADepositComponent } from '../Dialog-boxes/make-a-deposit/make-a-deposit.component';
import { MakeANonOnlineDepositFormComponent } from '../Dialog-boxes/make-a-non-online-deposit-form/make-a-non-online-deposit-form.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @ViewChild('closeBtn') closeBtn: ElementRef;
  @ViewChild('myModal') myModal: any;
  userform: FormGroup;
  deposit: any;
  modalReferencedepositform: NgbModalRef;
  modalReferencenononlinedepositform: NgbModalRef;
  depositSubmitform: NgbModalRef;
  payoutSubmitform: NgbModalRef;

  // formDialogRef: MatDialogRef<MakeADepositComponent>;
  // payformDialogRef: MatDialogRef<MakeADepositFormComponent>;

  constructor(private dialog: MatDialog, private formbuilder: FormBuilder, private modalService: NgbModal) { }

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
  formtitle: any;
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

  /* close the online deposit / pay out form */
  closeform() {
    this.modalReferencedepositform.close();
    this.userform.reset();
    this.enableCheckbox = false;
  }
  /* close the non onlie deposit / pay out form */
  closenononlineform() {
    this.modalReferencenononlinedepositform.close();
    this.nononlineuserform.reset();
    this.nononlineenableCheckbox = false;
  }

  /* check the online deposit / payout out form buttons */
  buttonclicked(title: any, btnname: any, templateref: any) {
    let ngbModalOptions: NgbModalOptions = {
      backdrop: 'static',
      keyboard: false
    }
    console.log(title, btnname)
    if (btnname === 'cashapp' || btnname === 'paypal' || btnname === 'zelle' || btnname === 'venmo') {
      if (title === 'Make a Deposit') {
        // this.openform('Make an Online Deposit');
        this.formtitle = 'Make an Online Deposit'
      } else if (title === 'Request a Pay Out') {
        // this.openform('Request an Online Pay Out');
        this.formtitle = 'Request an Online Pay Out'
      }
      this.userform.reset();

      this.modalReferencedepositform = this.modalService.open(templateref, ngbModalOptions)

    } else if (btnname === 'Make a Non Online Deposit') {
      // this.opennononlinedialog('Make a Non Online Deposit')
      this.formtitle = 'Make a Non Online Deposit'
      this.deposit = 'Deposit';
      this.paymentCards = [{ name: 'Visa / Master Card / AMEX' }, { name: 'Fedex / Western Union / Money Gram' }, { name: 'Crypto Currency' }]
      this.nononlineuserform.reset()
      this.selectedCardtype = ''
      this.modalReferencenononlinedepositform = this.modalService.open(templateref, ngbModalOptions)
    } else if (btnname === 'Request a Non Online Pay Out') {
      // this.opennononlinedialog('Request a Non Online Pay Out')
      this.deposit = 'Pay Out';
      this.formtitle = 'Request a Non Online Pay Out';
      this.paymentCards = [{ name: 'Fedex / Western Union / Money Gram' }, { name: 'Crypto Currency' }]
      this.nononlineuserform.reset();
      this.selectedCardtype = ''
      this.modalReferencenononlinedepositform = this.modalService.open(templateref, ngbModalOptions)
    }
    this.closeModal();


  }

  closeModal(): void {
    this.closeBtn.nativeElement.click();
  }

  // openform(title: any) {
  //   const dialogRef = this.dialog.open(MakeADepositFormComponent, {
  //     data: {
  //       title: title,
  //       SubTitle: 'Online Deposit Methods'
  //     }
  //   })
  //   dialogRef.afterClosed().subscribe((data: any) => {
  //     console.log(data)
  //   })
  // }

  // opennononlinedialog(title: any) {
  //   const dialogRef = this.dialog.open(MakeANonOnlineDepositFormComponent, {
  //     data: {
  //       title: title,
  //       SubTitle: 'Online Deposit Methods'
  //     }
  //   })
  //   dialogRef.afterClosed().subscribe((data: any) => {
  //     console.log(data)
  //   })
  // }

  /* online deposit / payout user form */
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
  senddata(content: any) {
    console.log('2123')
    console.log(this.userform)
    this.depositSubmitform = this.modalService.open(content, { centered: true })
    this.modalReferencedepositform.close();
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

  sendnononlineformdata(content: any) {
    console.log(this.nononlineuserform)
    this.payoutSubmitform = this.modalService.open(content, { centered: true });
    this.modalReferencenononlinedepositform.close()
  }
  resetForm() {
    this.userform.reset();
    this.nononlineuserform.reset();
    this.showcard = false;
    this.cryptoValues = [];
  }

  sendnononlinedata(content: any) {
    console.log('2123')
    console.log(this.nononlineuserform)
    this.payoutSubmitform = this.modalService.open(content, { centered: true })
    this.modalReferencenononlinedepositform.close()
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
  closesuccesspopup(type: any) {
    // 
    if (type === 'deposit') {
      this.depositSubmitform.close();
    } else {
      this.payoutSubmitform.close();
    }


  }

}
