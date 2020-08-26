import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupLoginComponent } from './signup-login/signup-login.component';
import { QuizAppComponent } from './quiz-app/quiz-app.component';
import { QuizComponent } from './quiz-app/quiz/quiz.component';
import { ResultComponent } from './quiz-app/result/result.component';

const routes: Routes = [
  { path: '', redirectTo: 'Login', pathMatch: 'full' },
  { path: 'Login', component: SignupLoginComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'result', component: ResultComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
