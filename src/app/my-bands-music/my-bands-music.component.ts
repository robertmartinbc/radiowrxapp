import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../shared/services/album.service';
import { Router, Params } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-my-bands-music',
  templateUrl: './my-bands-music.component.html',
  styleUrls: ['./my-bands-music.component.scss']
})
export class MyBandsMusicComponent implements OnInit {
  items: Array<any>;
  hideWhenNoStudent: boolean = false; //Hide albums table if no albums created.
  noData: boolean = false;
  preLoader: boolean = true;

  constructor(
    private albumService: AlbumService,
    public router: Router,
    private afAuth: AuthService
  ) { }

  ngOnInit() {
    this.getData();
    this.dataState();
  }

  getData() {
    this.albumService.getAlbums()
    .subscribe(result => {
      this.items = result;
      console.log(this.items);
    })
  }

  viewAlbum(item, docId) {
    this.router.navigate(['/view-album-details/' + item.payload.doc.id]);
    docId = item.payload.doc.id;
    localStorage.setItem('docId', docId);
    //console.log(docId);
    //localStorage.setItem(docId);
  }

  dataState() {
    this.albumService.getAlbums().subscribe(data => {
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
