import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AiQuizComponent } from './ai-quiz/ai-quiz.component';
import { HomeComponent } from './home/home.component';
import { StylesQuizComponent } from './styles-quiz/styles-quiz.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ai-quiz', component: AiQuizComponent },
  { path: 'styles-quiz', component: StylesQuizComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }