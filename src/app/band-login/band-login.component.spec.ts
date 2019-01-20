import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandLoginComponent } from './band-login.component';

describe('BandLoginComponent', () => {
  let component: BandLoginComponent;
  let fixture: ComponentFixture<BandLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
