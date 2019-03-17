import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { BandsbyfansService } from '../shared/services/bandsbyfans.service';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-edit-bands-by-fans',
  templateUrl: './edit-bands-by-fans.component.html',
  styleUrls: ['./edit-bands-by-fans.component.scss']
})
export class EditBandsByFansComponent implements OnInit {
  editForm: FormGroup;
  item: any;

  constructor(
    private router: Router,
    private bandsbyfansService: BandsbyfansService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private afAuth: AuthService
  ) { }

  ngOnInit() {
    this.route.data.subscribe(routeData => {
      let data = routeData['data'];
      if (data) {
        this.item = data.payload.data();
        this.item.id = data.payload.id;
        this.editBandsByFansForm();
      }
    })
  }

  editBandsByFansForm() {
    this.editForm = this.fb.group({
      chosenCountry: [this.item.chosenCountry, Validators.required],
      chosenTown: [this.item.chosenTown, Validators.required],
      ticketPrice: [this.item.ticketPrice, Validators.required],
      ticketsRequired: [this.item.ticketsRequired, Validators.required],
      bandsbyfansDescription: [this.item.bandsbyfansDescription, Validators.required]
    })
  }

  onSubmit(value){
    this.bandsbyfansService.updateBandsByFans(this.item.id, value)
    .then(
      res => {
        this.router.navigate(['/my-bands-by-fans']);
      }
    )
  }

}
