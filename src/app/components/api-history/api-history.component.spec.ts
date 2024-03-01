import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiHistoryComponent } from './api-history.component';

describe('ApiHistoryComponent', () => {
  let component: ApiHistoryComponent;
  let fixture: ComponentFixture<ApiHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApiHistoryComponent]
    });
    fixture = TestBed.createComponent(ApiHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
