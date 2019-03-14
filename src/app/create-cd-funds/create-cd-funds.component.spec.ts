import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCdFundsComponent } from './create-cd-funds.component';

describe('CreateCdFundsComponent', () => {
  let component: CreateCdFundsComponent;
  let fixture: ComponentFixture<CreateCdFundsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCdFundsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCdFundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
