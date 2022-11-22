import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateBookmarkComponent } from './create-bookmark.component';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateBookmarkComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class CreateBookmarkModule { }
