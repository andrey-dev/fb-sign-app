import { Component, OnInit } from '@angular/core';
import { SignService } from '../services/sign.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {
  public loggedIn = false;

  constructor(
    private signService: SignService,
    private storage: StorageService
  ) {}

  ngOnInit() {
    this.loggedIn = this.signService.isLogged() || this.storage.getSignState();
    this.signService.signStatusChanged.subscribe((isLogged: boolean) => {
      this.loggedIn = isLogged;
    });
  }

  onLogout() {
    this.signService.signOut();
  }

  onLogin() {
    this.signService.signIn();
  }
}
