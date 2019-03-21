import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSongListComponent } from './view-song-list.component';

describe('ViewSongListComponent', () => {
  let component: ViewSongListComponent;
  let fixture: ComponentFixture<ViewSongListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSongListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSongListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
