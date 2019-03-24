import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AlbumService } from '../shared/services/album.service';

@Component({
  selector: 'app-create-album',
  templateUrl: './create-album.component.html',
  styleUrls: ['./create-album.component.scss']
})
export class CreateAlbumComponent implements OnInit {

  albumForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private location: Location,
    private albumService: AlbumService
  ) { }

  ngOnInit() {
    this.createForm()
  }

  createForm() {
    this.albumForm = this.fb.group({
      albumTitle: ['', Validators.required ],
      albumGenre: ['', Validators.required ],
      yearReleased: ['', Validators.required ],
      numberOfTracks: ['', Validators.required ],
      description: ['', Validators.required ],
      upcCode: ['', Validators.required ],
      albumDuration: ['', Validators.required ]
    })
  }

  resetFields() {
    this.albumForm = this.fb.group({
      albumTitle: new FormControl('', Validators.required),
      albumGenre: new FormControl('', Validators.required),
      yearReleased: new FormControl('', Validators.required),
      numberOfTracks: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      upcCode: new FormControl('', Validators.required),
      albumDuration: new FormControl('', Validators.required)
    })
  }

  onSubmit(value) {
    this.albumService.createAlbum(value)
    .then(
      res => {
        this.resetFields();
        this.location.back();
        //this.router.navigate(['/my-bands-music']);
      }
    )
  }

  cancel() {
    this.location.back();
  }
}
