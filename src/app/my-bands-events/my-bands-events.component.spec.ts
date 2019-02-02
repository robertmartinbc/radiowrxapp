import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBandsEventsComponent } from './my-bands-events.component';

describe('MyBandsEventsComponent', () => {
  let component: MyBandsEventsComponent;
  let fixture: ComponentFixture<MyBandsEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBandsEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBandsEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
