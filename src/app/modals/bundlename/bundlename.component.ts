import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-bundlename',
  templateUrl: './bundlename.component.html',
  styleUrls: ['./bundlename.component.scss']
})
export class BundlenameComponent implements OnInit {
  title;

  constructor(
    public modalRef: BsModalRef
  ) { }

  ngOnInit() {
  }

}
