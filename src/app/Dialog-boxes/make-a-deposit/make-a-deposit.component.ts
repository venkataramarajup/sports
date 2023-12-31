import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
// import { VERSION, MatDialogRef, MatDialog, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-make-a-deposit',
  templateUrl: './make-a-deposit.component.html',
  styleUrls: ['./make-a-deposit.component.scss']
})
export class MakeADepositComponent implements OnInit {
  inputdata: any;

  constructor(@Inject(MAT_DIALOG_DATA) private data: any, private dialogRef: MatDialogRef<MakeADepositComponent>) {
    if (this.data) {
      console.log(this.data)
      this.inputdata = this.data
    }
  }

  ngOnInit(): void {

  }

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }

}
