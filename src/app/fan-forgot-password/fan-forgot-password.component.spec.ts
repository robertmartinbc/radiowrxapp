import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FanForgotPasswordComponent } from './fan-forgot-password.component';

describe('FanForgotPasswordComponent', () => {
  let component: FanForgotPasswordComponent;
  let fixture: ComponentFixture<FanForgotPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FanForgotPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FanForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
