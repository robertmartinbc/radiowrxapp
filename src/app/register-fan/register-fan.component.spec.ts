import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFanComponent } from './register-fan.component';

describe('RegisterFanComponent', () => {
  let component: RegisterFanComponent;
  let fixture: ComponentFixture<RegisterFanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterFanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
