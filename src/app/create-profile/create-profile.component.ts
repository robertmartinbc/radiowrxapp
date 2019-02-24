import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
//import { AuthService } from '../services/auth.service';
import { Router } from "@angular/router";
import { ProfileService } from '../shared/services/profile.service';



@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.scss']
})
export class CreateProfileComponent implements OnInit {

  profileForm: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public profileService: ProfileService
  ) { }

  ngOnInit() {
    this.createForm()
  }

  createForm() {
    this.profileForm = this.formBuilder.group({
      artistImage: ['', Validators.required ],
      artistName: ['', Validators.required] ,
      artistGenre: ['', Validators.required ],
      yearFormed: ['', Validators.required ],
      addressOne: ['', Validators.required ],
      addressTwo: ['', Validators.required ],
      artistTown: ['', Validators.required ],
      artistCountry: ['', Validators.required] ,
      postCode: ['', Validators.required ],
      contactNumber: ['', Validators.required ]
    })
  }

  resetFields() {
    this.profileForm = this.formBuilder.group({
      artistImage: new FormControl('', Validators.required ),
      artistName: new FormControl('', Validators.required ),
      artistGenre: new FormControl('', Validators.required ),
      yearsFormed: new FormControl('', Validators.required ),
      addressOne: new FormControl('', Validators.required ),
      addressTwo: new FormControl('', Validators.required ),
      artistTown: new FormControl('', Validators.required ),
      artistCountry: new FormControl('', Validators.required ),
      postCode: new FormControl('', Validators.required ),
      contactNumber: new FormControl('', Validators.required )
    })
  }

  onSubmit(value){
    this.profileService.createProfile(value)
    .then(
      res => {
        this.resetFields();
        this.router.navigate(['/profile']);
      }
    )
  }
}
