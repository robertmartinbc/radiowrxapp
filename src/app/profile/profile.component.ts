import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../shared/services/profile.service';
import { Router, Params } from "@angular/router";
import { AuthService } from '../shared/services/auth.service';
import { ImageCropperComponent, CropperSettings } from 'ng2-img-cropper';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  data: any;
  cropperSettings: CropperSettings;

  items: Array<any>
  hideWhenNoStudent: boolean = false; // Hide students data table when no student.
  noData: boolean = false;            // Showing No Student Message, when no student in database.
  preLoader: boolean = true;
  changingImage: boolean;

  constructor(
    public profileService: ProfileService,
    public router: Router,
    private afAuth: AuthService
  ) {
      this.cropperSettings = new CropperSettings();
      this.cropperSettings.width = 100;
      this.cropperSettings.height = 100;
      this.cropperSettings.croppedWidth =100;
      this.cropperSettings.croppedHeight = 100;
      this.cropperSettings.canvasWidth = 400;
      this.cropperSettings.canvasHeight = 300;
      this.cropperSettings.rounded = true;

      this.data = {};
    }

  ngOnInit() {
    this.getData();
    this.dataState()
  }

  getData() {
    this.profileService.getProfiles()
    .subscribe(result => {
      this.items = result;
    })
  }

  editProfile(item) {
    this.router.navigate(['/profile-details/' + item.payload.doc.id]);
  }

  logOut() {
    this.afAuth.logOut();
  }

  dataState() {
    this.profileService.getProfiles().subscribe(data => {
      this.preLoader = false;
      if(data.length <= 0){
        this.hideWhenNoStudent = false;
        this.noData = true;
      } else {
        this.hideWhenNoStudent = true;
        this.noData = false;
      }
    })
  }

  changingImageClick() {
    this.changingImage = true;
  }

  saveNewImage() {
    this.changingImage = false;
  }
}
