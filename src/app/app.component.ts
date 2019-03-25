import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { SomeComponent } from './some/some.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  modalRef: BsModalRef;


  constructor(
    private modalService: BsModalService
  ) { }

  ngOnInit() { }

  openModal() {
    this.modalRef = this.modalService.show(SomeComponent);
  }

}
