import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CdfundsService } from '../shared/services/cdfunds.service';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-edit-cd-funds',
  templateUrl: './edit-cd-funds.component.html',
  styleUrls: ['./edit-cd-funds.component.scss']
})
export class EditCdFundsComponent implements OnInit {
  editForm: FormGroup;
  item: any;

  constructor(
    private router: Router,
    private cdfundsService: CdfundsService,
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
        this.editCdFundsForm();
      }
    })
  }

  editCdFundsForm() {
    this.editForm = this.fb.group({
      cdfundsTitle: [this.item.cdfundsTitle, Validators.required],
      cdfundsPackage: [this.item.cdfundsPackage, Validators.required],
      expectationDate : [this.item.expectationDate, Validators.required],
      cdfundsDescription: [this.item.cdfundsDescription, Validators.required],
      requiredAmount: [this.item.requiredAmount, Validators.required]
    })
  }

  onSubmit(value){
    this.cdfundsService.updateCdFund(this.item.id, value)
    .then(
      res => {
        this.router.navigate(['/my-bands-cd-funds']);
      }
    )
  }

  cancel() {
    this.router.navigate(['/my-bands-cd-funds']);
  }

}
