
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from "@angular/router";
import { SongService } from '../shared/services/song.service';

@Injectable()
export class EditSongResolver implements Resolve<any> {

  constructor(public songService: SongService) { }

  resolve(route: ActivatedRouteSnapshot,) {

    return new Promise((resolve, reject) => {
      let songId = route.paramMap.get('id');
      this.songService.getSong(songId)
      .subscribe(
        data => {
          resolve(data);
        }
      );
    })
  }
}
