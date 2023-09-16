import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MakeADepositFormComponent } from '../Dialog-boxes/make-a-deposit-form/make-a-deposit-form.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MakeADepositComponent } from '../Dialog-boxes/make-a-deposit/make-a-deposit.component';
import { MakeANonOnlineDepositFormComponent } from '../Dialog-boxes/make-a-non-online-deposit-form/make-a-non-online-deposit-form.component';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @ViewChild('closeBtn') closeBtn: ElementRef;
  @ViewChild('myModal') myModal: any;

  // formDialogRef: MatDialogRef<MakeADepositComponent>;
  // payformDialogRef: MatDialogRef<MakeADepositFormComponent>;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    // this.openform()
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
    dialogRef.afterClosed().subscribe(data => {
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
    dialogRef.afterClosed().subscribe(data => {
      console.log(data)
    })
  }

}
