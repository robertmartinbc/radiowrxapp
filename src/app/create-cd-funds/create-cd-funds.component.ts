import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { CdfundsService } from '../shared/services/cdfunds.service';

@Component({
  selector: 'app-create-cd-funds',
  templateUrl: './create-cd-funds.component.html',
  styleUrls: ['./create-cd-funds.component.scss']
})
export class CreateCdFundsComponent implements OnInit {
  cdfundsForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private cdfundsService: CdfundsService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.cdfundsForm = this.fb.group({
      cdfundsTitle: ['', Validators.required ],
      cdfundsPackage: ['', Validators.required ],
      expectationDate: ['', Validators.required ],
      cdfundsDescription: ['', Validators.required ],
      requiredAmount: ['', Validators.required ]
    })
  }

  resetFields() {
    this.cdfundsForm = this.fb.group({
      cdfundsTitle: new FormControl('', Validators.required),
      cdfundsPackage: new FormControl('', Validators.required),
      expectationDate: new FormControl('', Validators.required),
      cdfundsDescription: new FormControl('', Validators.required),
      requiredAmount: new FormControl('', Validators.required)
    })
  }

  onSubmit(value) {
    this.cdfundsService.createCdFund(value)
    .then(
      res => {
        this.resetFields();
        this.router.navigate(['/my-bands-cd-funds']);
      }
    )
  }

}
