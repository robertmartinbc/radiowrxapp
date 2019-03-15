import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { BandsbyfansService } from '../shared/services/bandsbyfans.service';

@Component({
  selector: 'app-create-bands-by-fans',
  templateUrl: './create-bands-by-fans.component.html',
  styleUrls: ['./create-bands-by-fans.component.scss']
})
export class CreateBandsByFansComponent implements OnInit {
  bandsbyfansForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private bandsbyfansService: BandsbyfansService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.bandsbyfansForm = this.fb.group({
      chosenCountry: ['', Validators.required ],
      chosenTown: ['', Validators.required ],
      ticketPrice: ['', Validators.required ],
      ticketsRequired: ['', Validators.required ],
      bandsbyfansDescription: ['', Validators.required ]
    })
  }

  resetFields() {
    this.bandsbyfansForm = this.fb.group({
      chosenCountry: new FormControl('', Validators.required),
      chosenTown: new FormControl('', Validators.required),
      ticketPrice: new FormControl('', Validators.required),
      ticketsRequired: new FormControl('', Validators.required),
      bandsbyfansDescription: new FormControl('', Validators.required)
    })
  }

  onSubmit(value) {
    this.bandsbyfansService.createBandsByFans(value)
    .then(
      res => {
        this.resetFields();
        this.router.navigate(['/my-bands-by-fans']);
      }
    )
  }

}
