import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from "@angular/router";
import { BandsbyfansService } from '../shared/services/bandsbyfans.service';

@Injectable()
export class EditBandsByFansResolver implements Resolve<any> {

  constructor(public bandsbyfansService: BandsbyfansService) { }

  resolve(route: ActivatedRouteSnapshot,) {

    return new Promise((resolve, reject) => {
      let bandsbyfansId = route.paramMap.get('id');
      this.bandsbyfansService.getBandsByFan(bandsbyfansId)
      .subscribe(
        data => {
          resolve(data);
        }
      );
    })
  }
}
