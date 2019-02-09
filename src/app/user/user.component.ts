import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.scss']
})
export class UserComponent implements OnInit {

  constructor(
    public router: Router,
    public ngZone: NgZone
  ) { }

  ngOnInit() { }

}
