import { Component, OnInit } from '@angular/core';
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

  // formDialogRef: MatDialogRef<MakeADepositComponent>;
  // payformDialogRef: MatDialogRef<MakeADepositFormComponent>;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    // this.openform()
  }

  openMakeADepositdialog(type: any) {
    let dialogRef
    if (type === 'Deposit') {
      dialogRef = this.dialog.open(MakeADepositComponent, {
        data: {
          title: 'Make a Deposit',
          SubTitle: 'Online Deposit Methods',
          button1: 'Make a Non Online Deposit'
        }
      })
    } else {
      dialogRef = this.dialog.open(MakeADepositComponent, {
        data: {
          title: 'Request a Pay Out',
          SubTitle: 'Online Pay Out Methods',
          button1: 'Request a Non Online Pay Out'
        }
      })
    }

    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        console.log(data)
      }

    })
  }

  openform() {
    const dialogRef = this.dialog.open(MakeADepositFormComponent, {
      data: {
        title: 'Make a Online Deposit',
        SubTitle: 'Online Deposit Methods'
      }
    })
    dialogRef.afterClosed().subscribe(data => {
      console.log(data)
    })
  }

  opennononlinedialog() {
    const dialogRef = this.dialog.open(MakeANonOnlineDepositFormComponent, {
      data: {
        title: 'Make a Online Deposit',
        SubTitle: 'Online Deposit Methods'
      }
    })
    dialogRef.afterClosed().subscribe(data => {
      console.log(data)
    })
  }

}
