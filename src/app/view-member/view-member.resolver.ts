import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from "@angular/router";
import { MembersService } from '../shared/services/members.service';

@Injectable()
export class ViewMemberResolver implements Resolve<any> {

  constructor(public memberService: MembersService) { }

  resolve(route: ActivatedRouteSnapshot,) {

    return new Promise((resolve, reject) => {
      let memberId = route.paramMap.get('id');
      this.memberService.getMember(memberId)
      .subscribe(
        data => {
          resolve(data);
        }
      );
    })
  }
}
