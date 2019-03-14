import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from "@angular/router";
import { MembersService } from '../shared/services/members.service';

@Injectable()
export class EditMemberResolver implements Resolve<any> {

  constructor(public membersService: MembersService) { }

  resolve(route: ActivatedRouteSnapshot,) {

    return new Promise((resolve, reject) => {
      let memberId = route.paramMap.get('id');
      this.membersService.getMember(memberId)
      .subscribe(
        data => {
          resolve(data);
        }
      );
    })
  }
}
