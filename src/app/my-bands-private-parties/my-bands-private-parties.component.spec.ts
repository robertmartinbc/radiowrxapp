import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBandsPrivatePartiesComponent } from './my-bands-private-parties.component';

describe('MyBandsPrivatePartiesComponent', () => {
  let component: MyBandsPrivatePartiesComponent;
  let fixture: ComponentFixture<MyBandsPrivatePartiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBandsPrivatePartiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBandsPrivatePartiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
