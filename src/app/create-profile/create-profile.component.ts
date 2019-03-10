import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { AvatarDialogComponent } from "../avatar-dialog/avatar-dialog.component";
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
    //private firestore: AngularFirestore,
    private fb: FormBuilder,
    private router: Router,
    public profileService: ProfileService
  ) { }

  ngOnInit() {
    //this.profileService.getProfilesList();
    this.createForm()
  }

  createForm() {
    this.profileForm = this.fb.group({
      artistName: ['', Validators.required],
      artistGenre: ['', Validators.required],
      yearFormed: ['', Validators.required],
      addressOne: ['', Validators.required],
      addressTwo: ['', Validators.required],
      artistTown: ['', Validators.required],
      artistCountry: ['', Validators.required],
      postCode: ['', Validators.required],
      contactNumber: ['', Validators.required]
    }
  )
}

  resetFields(){
    this.profileForm = this.fb.group({
      artistName: new FormControl('', Validators.required),
      artistGenre: new FormControl('', Validators.required),
      yearFormed: new FormControl('', Validators.required),
      addressOne: new FormControl('', Validators.required),
      addressTwo: new FormControl('', Validators.required),
      artistTown: new FormControl('', Validators.required),
      artistCountry: new FormControl('', Validators.required),
      postCode: new FormControl('', Validators.required),
      contactNumber: new FormControl('', Validators.required),
    });
  }

  onSubmit(value) {
    this.profileService.createProfile(value)
    .then(
      res => {
        this.resetFields();
        this.router.navigate(['/profile']);
      }
    )
  }
}
