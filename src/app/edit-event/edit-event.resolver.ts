import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from "@angular/router";
import { EventsService } from '../shared/services/events.service';

@Injectable()
export class EditEventResolver implements Resolve<any> {

  constructor(public eventsService: EventsService) { }

  resolve(route: ActivatedRouteSnapshot,) {

    return new Promise((resolve, reject) => {
      let eventId = route.paramMap.get('id');
      this.eventsService.getEvent(eventId)
      .subscribe(
        data => {
          resolve(data);
        }
      );
    })
  }
}
