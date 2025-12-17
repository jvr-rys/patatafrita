import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AiQuizComponent } from './ai-quiz/ai-quiz.component';
import { HomeComponent } from './home/home.component';
import { StylesQuizComponent } from './styles-quiz/styles-quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    AiQuizComponent,
    HomeComponent,
    StylesQuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }