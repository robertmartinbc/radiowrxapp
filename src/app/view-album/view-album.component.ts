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
    this.route.data.subscribe(routeData => {
      let data = routeData['data'];
      if (data) {
        this.item = data.payload.data();
        this.item.id = data.payload.id;
        this.getSongData();
      }
    })
  }

  getSongData() {
    this.songService.getSongs()
    .subscribe(result => {
      this.items = result;
      console.log(this.items);
    })
  }

  playSong() {
    alert("Song is about to play!");
  }

  editSong() {
    alert("You're about to edit this song!");
  }
}
