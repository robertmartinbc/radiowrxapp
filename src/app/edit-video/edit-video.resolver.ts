import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from "@angular/router";
import { VideosService } from '../shared/services/videos.service';

@Injectable()
export class EditVideoResolver implements Resolve<any> {

  constructor(public videosService: VideosService) { }

  resolve(route: ActivatedRouteSnapshot,) {

    return new Promise((resolve, reject) => {
      let videoId = route.paramMap.get('id');
      this.videosService.getVideo(videoId)
      .subscribe(
        data => {
          resolve(data);
        }
      );
    })
  }
}
