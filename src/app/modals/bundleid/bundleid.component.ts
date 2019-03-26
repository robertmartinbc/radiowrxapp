import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-bundleid',
  templateUrl: './bundleid.component.html',
  styleUrls: ['./bundleid.component.scss']
})
export class BundleidComponent implements OnInit {
  title;

  constructor(
    public modalRef: BsModalRef
  ) { }

  ngOnInit() {
  }

}
