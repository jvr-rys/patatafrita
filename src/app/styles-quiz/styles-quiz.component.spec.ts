import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylesQuizComponent } from './styles-quiz.component';

describe('StylesQuizComponent', () => {
  let component: StylesQuizComponent;
  let fixture: ComponentFixture<StylesQuizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StylesQuizComponent]
    });
    fixture = TestBed.createComponent(StylesQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
