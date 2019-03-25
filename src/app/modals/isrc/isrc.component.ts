import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-isrc',
  templateUrl: './isrc.component.html',
  styleUrls: ['./isrc.component.scss']
})
export class IsrcComponent implements OnInit {
  title;

  constructor(
    public modalRef: BsModalRef
  ) { }

  ngOnInit() {
  }

}
