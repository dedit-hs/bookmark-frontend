import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarkComponent } from './bookmark.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { AddLinkComponent } from './add-link/add-link.component';
import { AddLinkModule } from './add-link/add-link.module';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'



@NgModule({
  declarations: [
    BookmarkComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    AddLinkModule,
    MatCardModule,
    MatProgressSpinnerModule,

  ],
  exports: [BookmarkComponent],
})
export class BookmarkModule { }
