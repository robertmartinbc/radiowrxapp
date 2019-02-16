import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-band-profile',
  templateUrl: './band-profile.component.html',
  styleUrls: ['./band-profile.component.scss']
})
export class BandProfileComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
  }

}
