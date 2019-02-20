import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SignComponent } from './sign/sign.component';
import { MyAnswerComponent } from './my-answer/my-answer.component';
import { AllAnswersComponent } from './all-answers/all-answers.component';

@NgModule({
  declarations: [AppComponent, MainComponent, SignComponent, MyAnswerComponent, AllAnswersComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
