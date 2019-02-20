import { Component, OnInit } from '@angular/core';
import { SocialUser } from 'angularx-social-login';
import { SignService } from '../services/sign.service';
import { NgForm } from '@angular/forms';
import { StorageService } from '../services/storage.service';

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

  constructor(
    private signService: SignService,
    private storage: StorageService
  ) {}

  ngOnInit() {
    this.signService.userDataChanged.subscribe((user: SocialUser) => {
      if (user) {
        if (this.getAnswerFromStorage()) {
          return;
        }
        this.name = user.name;
      }
    });
  }

  getAnswerFromStorage(): boolean {
    const answer = this.storage.getAnswer();
    if (!answer) {
      return false;
    }
    this.name = answer.name;
    this.currentStatus = answer.status;
    this.currentCompanions = answer.companions;
  }

  onSend(form: NgForm) {
    if (form.value.status === this.defaultStatus) {
      // If data in storage - delete
      this.storage.removeAnswer();
      return;
    }
    // Save to storage
    this.storage.setAnswerData(form.value.companions, form.value.status);
    this.storage.saveAnswer();
  }
}
