import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBandsByFansComponent } from './my-bands-by-fans.component';

describe('MyBandsByFansComponent', () => {
  let component: MyBandsByFansComponent;
  let fixture: ComponentFixture<MyBandsByFansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBandsByFansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBandsByFansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
