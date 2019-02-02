import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBandsVideosComponent } from './my-bands-videos.component';

describe('MyBandsVideosComponent', () => {
  let component: MyBandsVideosComponent;
  let fixture: ComponentFixture<MyBandsVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBandsVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBandsVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
