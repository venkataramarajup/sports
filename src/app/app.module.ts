import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CategoriesComponent } from './categories/categories.component';
import { NavComponent } from './nav/nav.component';
// import { MakeADepositComponent } from './make-a-deposit/make-a-deposit.component';
import { MakeADepositFormComponent } from './Dialog-boxes/make-a-deposit-form/make-a-deposit-form.component';
import { MakeADepositComponent } from './Dialog-boxes/make-a-deposit/make-a-deposit.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatCardModule } from '@angular/material/card';
import { MaterialModule } from './material.module';
import { MakeANonOnlineDepositFormComponent } from './Dialog-boxes/make-a-non-online-deposit-form/make-a-non-online-deposit-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CategoriesComponent,
    NavComponent,
    MakeADepositComponent,
    MakeADepositFormComponent,
    MakeANonOnlineDepositFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // MatDialogModule,
    // MatCardModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
