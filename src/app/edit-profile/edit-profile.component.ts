import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
//import { AngularFirestore } from 'angularfire2/firestore';
//import { User } from '../services/user';
//import { AuthService } from '../shared/services/auth.service';
import { ProfileService } from '../shared/services/profile.service';
//import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  editForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    public profileService: ProfileService,
    private location: Location
  ) {

    }

  // Initiate Reactive Form to create profiles.
  ngOnInit() {
    this.updateProfileData();
    const id = this.route.snapshot.paramMap.get('id');
    this.profileService.getProfile(id).valueChanges().subscribe(data => {
      this.editForm.setValue(data);
    })
  }

  // Accessing form control using getters
  get artistName() {
    return this.editForm.get('artistName');
  }

  get artistGenre() {
    return this.editForm.get('artistGenre');
  }

  get yearFormed() {
    return this.editForm.get('yearFormed');
  }

  get addressOne() {
    return this.editForm.get('addressOne');
  }

  get addressTwo() {
    return this.editForm.get('addressTwo');
  }

  get artistTown() {
    return this.editForm.get('artistTown');
  }

  get artistCountry() {
    return this.editForm.get('artistCountry');
  }

  get postCode() {
    return this.editForm.get('postCode');
  }

  get contactNumber() {
    return this.editForm.get('contactNumber');
  }

  get artistImage() {
    return this.editForm.get('artistImage');
  }

  updateProfileData() {
    this.editForm = this.formBuilder.group({
      artistName: ['', Validators.required],
      artistGenre: ['', Validators.required],
      yearFormed: ['', Validators.required],
      addressOne: ['', Validators.required],
      addressTwo: ['', Validators.required],
      artistTown: ['', Validators.required],
      artistCountry: ['', Validators.required],
      postCode: ['', Validators.required],
      contactNumber: ['', Validators.required],
      artistImage: ['', Validators.required],
    })
  }

  goBack() {
    this.location.back();
  }

  updateForm() {
    this.profileService.updateProfile(this.editForm.value);
    this.router.navigate(['profile']);
  }

  cancel(){
    this.router.navigate(['/profile']);
  }
}


    /*this.route.data.subscribe(routeData => {
      let data = routeData['data'];
      this.item = data.payload.data();
      this.item.id = data.payload.id;
    })*/

  /*createForm() {
    this.profileForm = this.formBuilder.group({
      artistImage: ['', Validators.required ],
      artistName: ['', Validators.required ],
      artistGenre: ['', Validators.required ],
      yearsFormed: ['', Validators.required ],
      addressOne: ['', Validators.required ],
      addressTwo: ['', Validators.required ],
      artistTown: ['', Validators.required ],
      artistCountry: ['', Validators.required ],
      postCode: ['', Validators.required ],
      contactNumber: ['', Validators.required ]
    })
  }

  onSubmit(value) {
    value.image = this.item.image,
    value.artistName = this.item.artistName;
    value.artistGenre = this.item.artistGenre;
    value.yearFormed = this.item.yearFormed;
    value.addressOne = this.item.addressOne;
    value.addressTwo = this.item.addressTwo;
    value.artistTown = this.item.artistTown;
    value.artistCountry = this.item.artistCountry;
    value.postCode = this.item.postCode;
    value.contactNumber = this.item.contactNumber;
  }

  delete() {
    this.profileService.deleteProfile(this.item.id)
    .then(
      res => {
        this.router.navigate(['/profile']);
      },
      err => {
        console.log(err);
      }
    )
  }*/
