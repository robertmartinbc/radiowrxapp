import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-writers',
  templateUrl: './writers.component.html',
  styleUrls: ['./writers.component.scss']
})
export class WritersComponent implements OnInit {
  title;

  constructor(
    public modalRef: BsModalRef
  ) { }

  ngOnInit() {
  }

}
