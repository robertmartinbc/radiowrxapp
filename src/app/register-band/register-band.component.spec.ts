import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterBandComponent } from './register-band.component';

describe('RegisterBandComponent', () => {
  let component: RegisterBandComponent;
  let fixture: ComponentFixture<RegisterBandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterBandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterBandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
