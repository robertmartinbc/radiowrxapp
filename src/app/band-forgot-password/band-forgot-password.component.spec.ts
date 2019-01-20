import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandForgotPasswordComponent } from './band-forgot-password.component';

describe('BandForgotPasswordComponent', () => {
  let component: BandForgotPasswordComponent;
  let fixture: ComponentFixture<BandForgotPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandForgotPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
