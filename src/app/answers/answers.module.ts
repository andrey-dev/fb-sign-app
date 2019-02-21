import { NgModule } from '@angular/core';
import { AllAnswersComponent } from './all-answers/all-answers.component';
import { AllAnswersPopupComponent } from './all-answers/all-answers-popup/all-answers-popup.component';
import { MyAnswerComponent } from './my-answer/my-answer.component';
import { MyAnswerPopupComponent } from './my-answer/my-answer-popup.component';
import { CommonModule } from '@angular/common';
import {
  MatDialogModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatDividerModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AllAnswersComponent,
    AllAnswersPopupComponent,
    MyAnswerComponent,
    MyAnswerPopupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDividerModule
  ],
  entryComponents: [
    MyAnswerComponent,
    AllAnswersComponent,
    MyAnswerPopupComponent,
    AllAnswersPopupComponent
  ]
})
export class AnswersModule {}
