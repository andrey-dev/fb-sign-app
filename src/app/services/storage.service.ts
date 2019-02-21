import { Injectable } from '@angular/core';

export interface Answer {
  name: string;
  photoUrl: string;
  companions: number;
  status: string;
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

  getAllAnswers() {
    const result = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key === this.signState) {
        continue;
      }
      const value = JSON.parse(localStorage.getItem(key));
      if (value) {
        result.push(value);
      }
    }
    return result;
  }

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

  setAnswerData(companions: number, status: string) {
    this.currentAnswer.companions = companions;
    this.currentAnswer.status = status;
  }
}
