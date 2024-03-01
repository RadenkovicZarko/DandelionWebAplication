import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityExtractionComponentComponent } from './entity-extraction-component.component';

describe('EntityExtractionComponentComponent', () => {
  let component: EntityExtractionComponentComponent;
  let fixture: ComponentFixture<EntityExtractionComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntityExtractionComponentComponent]
    });
    fixture = TestBed.createComponent(EntityExtractionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
