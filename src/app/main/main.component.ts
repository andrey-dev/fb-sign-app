import { Component, OnInit } from '@angular/core';
import {
  ComponentPortal,
  Portal,
  TemplatePortal,
  CdkPortalOutlet
} from '@angular/cdk/portal';

import { MyAnswerComponent } from '../my-answer/my-answer.component';
import { AllAnswersComponent } from '../all-answers/all-answers.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  myAnswerComponent: ComponentPortal<MyAnswerComponent>;
  allAnswersComponent: ComponentPortal<AllAnswersComponent>;
  selectedPortal: Portal<any>;

  ngOnInit() {
    this.myAnswerComponent = new ComponentPortal(MyAnswerComponent);
    this.allAnswersComponent = new ComponentPortal(AllAnswersComponent);
    this.selectedPortal = this.myAnswerComponent;
  }
}
