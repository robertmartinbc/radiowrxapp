import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandsByFansComponent } from './bands-by-fans.component';

describe('BandsByFansComponent', () => {
  let component: BandsByFansComponent;
  let fixture: ComponentFixture<BandsByFansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandsByFansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandsByFansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
