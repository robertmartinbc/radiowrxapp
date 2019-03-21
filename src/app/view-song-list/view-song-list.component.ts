import { Component, OnInit } from '@angular/core';
import { SongService } from '../shared/services/song.service';
import { Router, Params } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';


@Component({
  selector: 'app-view-song-list',
  templateUrl: './view-song-list.component.html',
  styleUrls: ['./view-song-list.component.scss']
})
export class ViewSongListComponent implements OnInit {
  items: Array<any>;
  hideWhenNoStudent: boolean = false; //Hide albums table if no albums created.
  noData: boolean = false;
  preLoader: boolean = true;

  constructor(
    private songService: SongService,
    public router: Router,
    private afAuth: AuthService
  ) { }

  ngOnInit() {
    this.getData();
    this.dataState();
  }

  getData() {
    this.songService.getSongs()
    .subscribe(result => {
      this.items = result;
    })
  }

  dataState() {
    this.songService.getSongs().subscribe(data => {
      this.preLoader = false;
      if(data.length <= 0){
        this.hideWhenNoStudent = false;
        this.noData = true;
      } else {
        this.hideWhenNoStudent = true;
        this.noData = false;
      }
    })
  }

}
