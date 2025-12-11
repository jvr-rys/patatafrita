import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AiQuizComponent } from './ai-quiz/ai-quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    AiQuizComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
