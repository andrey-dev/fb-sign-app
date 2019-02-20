import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  readonly signState = 'signState';
  constructor() {}

  setSignState(value: string) {
    localStorage.setItem(this.signState, value);
  }

  getSignState() {
    return JSON.parse(localStorage.getItem(this.signState));
  }

  setData(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  getData(key: string) {
    localStorage.getItem(key);
  }

  deleteData(key: string) {
    localStorage.removeItem(key);
  }
}
