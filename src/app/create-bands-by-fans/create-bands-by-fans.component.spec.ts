import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBandsByFansComponent } from './create-bands-by-fans.component';

describe('CreateBandsByFansComponent', () => {
  let component: CreateBandsByFansComponent;
  let fixture: ComponentFixture<CreateBandsByFansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBandsByFansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBandsByFansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
