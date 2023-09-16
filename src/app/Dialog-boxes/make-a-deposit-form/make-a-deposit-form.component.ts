import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-make-a-deposit-form',
  templateUrl: './make-a-deposit-form.component.html',
  styleUrls: ['./make-a-deposit-form.component.scss']
})
export class MakeADepositFormComponent implements OnInit {
  userform: FormGroup;
  enableCheckbox: any = false;
  showdropdownfield: boolean = false;
  title: any;
  @ViewChild('myModal') myModal: ElementRef;

  constructor(@Inject(MAT_DIALOG_DATA) private data: any, private dialogRef: MatDialogRef<MakeADepositFormComponent>, private formbuilder: FormBuilder) {
    console.log(this.data)
    if (this.data.title === 'Make an Online Deposit') {
      this.title = this.data.title;
    } else {
      this.title = this.data.title;
    }

  }

  ngOnInit(): void {
    this.buildform()
    this.openModel()
    // this.ownerForm = new FormGroup({
    //   name: new FormControl('', [Validators.required, Validators.maxLength(60)]),
    //   dateOfBirth: new FormControl(new Date()),
    //   address: new FormControl('', [Validators.required, Validators.maxLength(100)])
    // });
  }
  openModel() {
    this.myModal.nativeElement.className = 'modal fade show';
    //  this.myModal.nativeElement.className = 'modal hide';
  }

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

  resetForm() {
    this.userform.reset();
  }
  senddata() {
    console.log('2123')
    this.dialogRef.close('123')
  }

  fieldsChange(evt: any) {
    this.enableCheckbox = evt.target.checked
    console.log(evt)
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
