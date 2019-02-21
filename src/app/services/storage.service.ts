import { Injectable } from '@angular/core';

interface Answer {
  name: string;
  photoUrl: string;
  companions: number;
  status: number;
}

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  readonly signState = 'signState';
  private currentAnswer = {} as Answer;
  private currentId: string;

  constructor() {}

  setSignState(value: string) {
    localStorage.setItem(this.signState, value);
  }

  getSignState() {
    return JSON.parse(localStorage.getItem(this.signState));
  }

  saveAnswer() {
    localStorage.setItem(this.currentId, JSON.stringify(this.currentAnswer));
  }

  removeAnswer() {
    if (localStorage.getItem(this.currentId)) {
      localStorage.removeItem(this.currentId);
    }
  }

  getAnswer() {
    const storageData = JSON.parse(localStorage.getItem(this.currentId));
    return storageData ? storageData : this.currentAnswer;
  }

  getAllAnswers() {}

  setUserData(user: any) {
    if (!user) {
      this.currentAnswer = {} as Answer;
      this.currentId = '';
      return;
    }
    this.currentAnswer.photoUrl = user.photoUrl;
    this.currentAnswer.name = user.name;
    this.currentId = user.id;
  }

  setAnswerData(companions: number, status: number) {
    this.currentAnswer.companions = companions;
    this.currentAnswer.status = status;
  }
}
