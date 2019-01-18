import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdFundsComponent } from './cd-funds.component';

describe('CdFundsComponent', () => {
  let component: CdFundsComponent;
  let fixture: ComponentFixture<CdFundsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdFundsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdFundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
