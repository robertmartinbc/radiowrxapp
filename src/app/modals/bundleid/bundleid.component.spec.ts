import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BundleidComponent } from './bundleid.component';

describe('BundleidComponent', () => {
  let component: BundleidComponent;
  let fixture: ComponentFixture<BundleidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BundleidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BundleidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
