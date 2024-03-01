import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextSimilarityComponentComponent } from './text-similarity-component.component';

describe('TextSimilarityComponentComponent', () => {
  let component: TextSimilarityComponentComponent;
  let fixture: ComponentFixture<TextSimilarityComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextSimilarityComponentComponent]
    });
    fixture = TestBed.createComponent(TextSimilarityComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
