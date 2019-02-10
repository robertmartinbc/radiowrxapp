import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBandsMembersComponent } from './my-bands-members.component';

describe('MyBandsMembersComponent', () => {
  let component: MyBandsMembersComponent;
  let fixture: ComponentFixture<MyBandsMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBandsMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBandsMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
