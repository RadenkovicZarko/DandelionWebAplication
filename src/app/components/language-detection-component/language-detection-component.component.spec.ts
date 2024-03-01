import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageDetectionComponentComponent } from './language-detection-component.component';

describe('LanguageDetectionComponentComponent', () => {
  let component: LanguageDetectionComponentComponent;
  let fixture: ComponentFixture<LanguageDetectionComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LanguageDetectionComponentComponent]
    });
    fixture = TestBed.createComponent(LanguageDetectionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
