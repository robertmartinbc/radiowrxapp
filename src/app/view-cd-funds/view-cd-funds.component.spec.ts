import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCdFundsComponent } from './view-cd-funds.component';

describe('ViewCdFundsComponent', () => {
  let component: ViewCdFundsComponent;
  let fixture: ComponentFixture<ViewCdFundsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCdFundsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCdFundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
