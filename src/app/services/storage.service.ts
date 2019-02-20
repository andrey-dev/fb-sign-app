import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  readonly signState = 'signState';
  constructor() {}

  setData(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  setSignState(value: string) {
    localStorage.setItem(this.signState, value);
  }

  getSignState() {
    return JSON.parse(localStorage.getItem(this.signState));
  }

  getData(key: string) {
    localStorage.getItem(key);
  }

  deleteData(key: string) {
    localStorage.removeItem(key);
  }
}
