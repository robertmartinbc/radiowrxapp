import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBandsCdFundsComponent } from './my-bands-cd-funds.component';

describe('MyBandsCdFundsComponent', () => {
  let component: MyBandsCdFundsComponent;
  let fixture: ComponentFixture<MyBandsCdFundsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBandsCdFundsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBandsCdFundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
