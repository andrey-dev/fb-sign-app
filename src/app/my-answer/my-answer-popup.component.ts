import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-my-answer-popup',
  template: `
    <p>Please fill out the form when everything will be known</p>
    <button mat-button (click)="onClick()">Ok</button>
  `
})
export class MyAnswerPopupComponent {
  constructor(public dialogRef: MatDialogRef<MyAnswerPopupComponent>) {}

  onClick() {
    this.dialogRef.close();
  }
}
