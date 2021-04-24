import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { FavoriteButtonComponent } from './components/buttons/favorite-button/favorite-button.component';
import { CollapseButtonComponent } from './components/buttons/collapse-button/collapse-button.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [LoaderComponent, FavoriteButtonComponent, CollapseButtonComponent],
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    MatSnackBarModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class SharedModule { }
