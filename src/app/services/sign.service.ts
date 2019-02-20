import { Injectable, EventEmitter } from '@angular/core';
import {
  AuthService,
  FacebookLoginProvider,
  SocialUser
} from 'angularx-social-login';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class SignService {
  public signStatusChanged = new EventEmitter<boolean>();
  private user: SocialUser;
  private loggedIn: boolean;

  constructor(
    private authService: AuthService,
    private storage: StorageService
  ) {
    this.authService.authState.subscribe(user => {
      console.log(user);
      this.user = user;
      const isLogged = user != null;
      if (this.loggedIn !== isLogged) {
        this.loggedIn = isLogged;
        this.storage.setSignState(this.loggedIn.toString());
        this.signStatusChanged.emit(this.loggedIn);
      }
    });
  }

  signIn(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    if (this.loggedIn) {
      this.authService.signOut();
    }
  }

  isLogged(): boolean {
    return this.loggedIn;
  }
}
