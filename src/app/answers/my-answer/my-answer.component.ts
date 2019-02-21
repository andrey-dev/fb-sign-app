import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material';

import { StorageService } from '../../services/storage.service';
import { MyAnswerPopupComponent } from './my-answer-popup.component';

@Component({
  selector: 'app-my-answer',
  templateUrl: './my-answer.component.html',
  styleUrls: ['./my-answer.component.scss']
})
export class MyAnswerComponent implements OnInit {
  public readonly defaultStatus = '2';
  public readonly comeStatus = '1';
  public readonly notComeStatus = '0';
  public readonly defaultCompanions = 0;
  public currentStatus = this.defaultStatus;
  public currentCompanions = this.defaultCompanions;
  public name = '';
  private readonly dialogWidth = '300px';

  constructor(private storage: StorageService, public dialog: MatDialog) {}

  ngOnInit() {
    this.getAnswerFromStorage();
  }

  getAnswerFromStorage(): void {
    const answer = this.storage.getAnswer();
    this.name = answer.name;
    this.currentStatus = answer.status || this.currentStatus;
    this.currentCompanions = answer.companions || this.currentCompanions;
  }

  onSend(form: NgForm) {
    if (form.value.status === this.defaultStatus) {
      this.storage.removeAnswer();
      this.openDialog();
      return;
    }
    this.storage.setAnswerData(form.value.companions, form.value.status);
    this.storage.saveAnswer();
  }

  openDialog() {
    this.dialog.open(MyAnswerPopupComponent, {
      width: this.dialogWidth
    });
  }
}
