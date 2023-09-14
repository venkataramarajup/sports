import { Component, OnInit } from '@angular/core';
import { MakeADepositFormComponent } from '../Dialog-boxes/make-a-deposit-form/make-a-deposit-form.component';
// import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  // formDialogRef: MatDialogRef<MakeADepositFormComponent>;

  constructor() { }

  ngOnInit(): void {
  }

  opendialog() {
    // this.formDialogRef = this.dialog.open(MakeADepositFormComponent, {})
  }

}
