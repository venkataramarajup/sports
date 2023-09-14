import { Component, Inject, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-make-a-deposit-form',
  templateUrl: './make-a-deposit-form.component.html',
  styleUrls: ['./make-a-deposit-form.component.scss']
})
export class MakeADepositFormComponent implements OnInit {
  // ownerForm: FormGroup;
  // @Inject(MAT_DIALOG_DATA) private data: any,
  //   private dialogRef: MatDialogRef<MakeADepositFormComponent>

  constructor() { }

  ngOnInit(): void {
    // this.ownerForm = new FormGroup({
    //   name: new FormControl('', [Validators.required, Validators.maxLength(60)]),
    //   dateOfBirth: new FormControl(new Date()),
    //   address: new FormControl('', [Validators.required, Validators.maxLength(100)])
    // });
  }

  // public hasError = (controlName: string, errorName: string) => {
  //   return this.ownerForm.controls[controlName].hasError(errorName);
  // }

  // public createOwner = (ownerFormValue: any) => {
  //   if (this.ownerForm.valid) {
  //     // this.executeOwnerCreation(ownerFormValue);
  //   }
  // }

}
