import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IswcComponent } from './iswc.component';

describe('IswcComponent', () => {
  let component: IswcComponent;
  let fixture: ComponentFixture<IswcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IswcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IswcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
