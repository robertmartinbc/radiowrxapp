import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FanLoginComponent } from './fan-login.component';

describe('FanLoginComponent', () => {
  let component: FanLoginComponent;
  let fixture: ComponentFixture<FanLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FanLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FanLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
