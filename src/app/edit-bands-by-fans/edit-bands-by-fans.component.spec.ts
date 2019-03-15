import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBandsByFansComponent } from './edit-bands-by-fans.component';

describe('EditBandsByFansComponent', () => {
  let component: EditBandsByFansComponent;
  let fixture: ComponentFixture<EditBandsByFansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBandsByFansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBandsByFansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
