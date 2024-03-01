import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenConfigurationComponent } from './token-configuration.component';

describe('TokenConfigurationComponent', () => {
  let component: TokenConfigurationComponent;
  let fixture: ComponentFixture<TokenConfigurationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TokenConfigurationComponent]
    });
    fixture = TestBed.createComponent(TokenConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
