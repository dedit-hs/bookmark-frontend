import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { BookmarksDocument, CreateBookmarkGQL } from 'src/generated-types';

@Component({
  selector: 'app-create-bookmark',
  templateUrl: './create-bookmark.component.html',
  styleUrls: ['./create-bookmark.component.scss']
})
export class CreateBookmarkComponent implements OnInit {

  bookmarkName = new FormControl<any>('', [Validators.required]);

  constructor(
    private readonly createBookmarkGql: CreateBookmarkGQL,
    private readonly dialogRef: MatDialogRef<CreateBookmarkComponent>
  ) { }

  ngOnInit(): void {
  }

  getBookmarkNameError() {
    if (this.bookmarkName.hasError('required')) {
      return 'you must enter a value.';
    }

    return '';
  }

  createBookmark() {
    this.createBookmarkGql
      .mutate(
        {
          createBookmarkData: { name: this.bookmarkName.value },
        },
        {
          refetchQueries: [{
            query: BookmarksDocument}],
        }
      )
      .subscribe(() => {
        this.dialogRef.close();
      });
  }

}
