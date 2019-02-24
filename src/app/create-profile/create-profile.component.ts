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

  public profileForm: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public profileService: ProfileService
  ) { }

  ngOnInit() {
    this.profileService.getProfilesList();
    this.profilForm()
  }

  // Reactive Profile Form
  profilForm() {
    this.profileForm = this.formBuilder.group({
      artistName: ['', Validators.required],
      artistGenre: ['', Validators.required],
      yearFormed: ['', Validators.required],
      addressOne: ['', Validators.required],
      addressTwo: ['', Validators.required],
      artistTown: ['', Validators.required],
      artistCountry: ['', Validators.required],
      postCode: ['', Validators.required],
      contactNumber: ['', Validators.required]
      //artistImage: ['', Validators.required],
    })
  }

  // Accessing form control using getters
  get artistName() {
    return this.profileForm.get('artistName');
  }

  get artistGenre() {
    return this.profileForm.get('artistGenre');
  }

  get yearFormed() {
    return this.profileForm.get('yearFormed');
  }

  get addressOne() {
    return this.profileForm.get('addressOne');
  }

  get addressTwo() {
    return this.profileForm.get('addressTwo');
  }

  get artistTown() {
    return this.profileForm.get('artistTown');
  }

  get artistCountry() {
    return this.profileForm.get('artistCountry');
  }

  get postCode() {
    return this.profileForm.get('postCode');
  }

  get contactNumber() {
    return this.profileForm.get('contactNumber');
  }

  get artistImage() {
    return this.profileForm.get('artistImage');
  }

  // Reset profile forms values
  resetForm() {
    this.profileForm.reset();
  }

  // Submit profile form data to Firebase
  submitProfileData() {
    this.profileService.createProfile(this.profileForm.value);
    this.resetForm();
    this.router.navigate(['profile']);
  }
  /*createForm() {
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
  }*/
}
