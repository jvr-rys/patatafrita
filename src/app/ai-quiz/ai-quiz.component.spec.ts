import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiQuizComponent } from './ai-quiz.component';

describe('AiQuizComponent', () => {
  let component: AiQuizComponent;
  let fixture: ComponentFixture<AiQuizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AiQuizComponent]
    });
    fixture = TestBed.createComponent(AiQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
