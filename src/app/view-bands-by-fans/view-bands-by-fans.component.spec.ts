import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBandsByFansComponent } from './view-bands-by-fans.component';

describe('ViewBandsByFansComponent', () => {
  let component: ViewBandsByFansComponent;
  let fixture: ComponentFixture<ViewBandsByFansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBandsByFansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBandsByFansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
