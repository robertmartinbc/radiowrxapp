import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from "@angular/router";
import { AlbumService } from '../shared/services/album.service';

@Injectable()
export class EditAlbumResolver implements Resolve<any> {

  constructor(public albumService: AlbumService) { }

  resolve(route: ActivatedRouteSnapshot,) {

    return new Promise((resolve, reject) => {
      let albumId = route.paramMap.get('id');
      this.albumService.getAlbum(albumId)
      .subscribe(
        data => {
          resolve(data);
        }
      );
    })
  }
}
