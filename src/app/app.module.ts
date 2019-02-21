import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';
import { FacebookLoginProvider } from 'angularx-social-login';
import { PortalModule } from '@angular/cdk/portal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SignComponent } from './sign/sign.component';
import { MyAnswerComponent } from './my-answer/my-answer.component';
import { AllAnswersComponent } from './all-answers/all-answers.component';
import { MyAnswerPopupComponent } from './my-answer/my-answer-popup.component';

const config = new AuthServiceConfig([
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('2127758263981840')
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SignComponent,
    MyAnswerComponent,
    MyAnswerPopupComponent,
    AllAnswersComponent
  ],
  imports: [
    BrowserModule,
    SocialLoginModule,
    PortalModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  entryComponents: [
    MyAnswerComponent,
    AllAnswersComponent,
    MyAnswerPopupComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
