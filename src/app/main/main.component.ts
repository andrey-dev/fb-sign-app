import { Component, OnInit, OnDestroy } from '@angular/core';
import { ComponentPortal, Portal } from '@angular/cdk/portal';

import { MyAnswerComponent } from '../answers/my-answer/my-answer.component';
import { AllAnswersComponent } from '../answers/all-answers/all-answers.component';
import { SignService } from '../services/sign.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  loggedIn = false;
  myAnswerComponent: ComponentPortal<MyAnswerComponent>;
  allAnswersComponent: ComponentPortal<AllAnswersComponent>;
  selectedPortal: Portal<any>;

  constructor(private signService: SignService) {}

  ngOnInit() {
    this.myAnswerComponent = new ComponentPortal(MyAnswerComponent);
    this.allAnswersComponent = new ComponentPortal(AllAnswersComponent);
    this.selectedPortal = this.myAnswerComponent;

    this.signService.signStatusChanged.subscribe((isLogged: boolean) => {
      this.loggedIn = isLogged;
    });
  }

  ngOnDestroy() {
    this.signService.signStatusChanged.unsubscribe();
  }
}
