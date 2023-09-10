import { Component, Inject, OnInit } from '@angular/core';
// import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
// import { VERSION, MatDialogRef, MatDialog, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-make-a-deposit',
  templateUrl: './make-a-deposit.component.html',
  styleUrls: ['./make-a-deposit.component.scss']
})
export class MakeADepositComponent implements OnInit {
  // @Inject(MAT_DIALOG_DATA) private data: any,
  // private dialogRef: MatDialogRef<MakeADepositComponent>

  constructor() {
    // if (data) {
    //   // this.message = data.message || this.message;
    //   // if (data.buttonText) {
    //   //   this.confirmButtonText = data.buttonText.ok || this.confirmButtonText;
    //   //   this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
    //   // }
    // }
  }

  ngOnInit(): void {

  }

  onConfirmClick(): void {
    // this.dialogRef.close(true);
  }

}
