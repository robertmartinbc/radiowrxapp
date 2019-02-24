import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.scss']
})
export class UserComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone
  ) { }

  ngOnInit() { }

}
