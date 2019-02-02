import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBandsMusicComponent } from './my-bands-music.component';

describe('MyBandsMusicComponent', () => {
  let component: MyBandsMusicComponent;
  let fixture: ComponentFixture<MyBandsMusicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBandsMusicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBandsMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
