import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BundlenameComponent } from './bundlename.component';

describe('BundlenameComponent', () => {
  let component: BundlenameComponent;
  let fixture: ComponentFixture<BundlenameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BundlenameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BundlenameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
