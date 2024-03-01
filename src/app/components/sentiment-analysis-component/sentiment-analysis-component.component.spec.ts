import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentimentAnalysisComponentComponent } from './sentiment-analysis-component.component';

describe('SentimentAnalysisComponentComponent', () => {
  let component: SentimentAnalysisComponentComponent;
  let fixture: ComponentFixture<SentimentAnalysisComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SentimentAnalysisComponentComponent]
    });
    fixture = TestBed.createComponent(SentimentAnalysisComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
