import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';
import { FacebookLoginProvider } from 'angularx-social-login';
import { PortalModule } from '@angular/cdk/portal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AnswersModule } from './answers/answers.module';
import { SignModule } from './sign/sign.module';

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
  declarations: [AppComponent, MainComponent],
  imports: [
    BrowserModule,
    SocialLoginModule,
    PortalModule,
    BrowserAnimationsModule,
    AnswersModule,
    SignModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
