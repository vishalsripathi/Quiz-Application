import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupLoginComponent } from './signup-login/signup-login.component';
import { QuizAppComponent } from './quiz-app/quiz-app.component';
import { NavbarComponent } from './quiz-app/navbar/navbar.component';
import { QuizComponent } from './quiz-app/quiz/quiz.component';
import { ResultComponent } from './quiz-app/result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupLoginComponent,
    QuizAppComponent,
    NavbarComponent,
    QuizComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
