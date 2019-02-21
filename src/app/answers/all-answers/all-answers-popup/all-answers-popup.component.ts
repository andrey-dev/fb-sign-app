import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-all-answers-popup',
  templateUrl: './all-answers-popup.component.html',
  styleUrls: ['./all-answers-popup.component.scss']
})
export class AllAnswersPopupComponent {
  constructor(
    public dialogRef: MatDialogRef<AllAnswersPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {}

  onNoClicked() {
    this.dialogRef.close();
  }
}
