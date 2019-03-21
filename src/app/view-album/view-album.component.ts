import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AlbumService } from '../shared/services/album.service';
import { SongService } from '../shared/services/song.service';

@Component({
  selector: 'app-view-album',
  templateUrl: './view-album.component.html',
  styleUrls: ['./view-album.component.scss']
})
export class ViewAlbumComponent implements OnInit {
  item: any;
  items: Array<any>;

  constructor(
    private router: Router,
    private albumService: AlbumService,
    private songService: SongService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getSongData();
  }

  getSongData() {
    this.songService.getSongs()
    .subscribe(result => {
      this.items = result;
    })
  }
}
