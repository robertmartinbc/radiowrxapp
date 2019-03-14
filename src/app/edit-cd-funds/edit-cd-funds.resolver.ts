import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from "@angular/router";
import { CdfundsService } from '../shared/services/cdfunds.service';

@Injectable()
export class EditCdFundsResolver implements Resolve<any> {

  constructor(public cdfundsService: CdfundsService) { }

  resolve(route: ActivatedRouteSnapshot,) {

    return new Promise((resolve, reject) => {
      let cdfundsId = route.paramMap.get('id');
      this.cdfundsService.getCdFund(cdfundsId)
      .subscribe(
        data => {
          resolve(data);
        }
      );
    })
  }
}
