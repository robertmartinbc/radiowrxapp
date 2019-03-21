import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { SongService } from '../shared/services/song.service';

@Component({
  selector: 'app-create-song',
  templateUrl: './create-song.component.html',
  styleUrls: ['./create-song.component.scss']
})
export class CreateSongComponent implements OnInit {

  songForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private songService: SongService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.songForm = this.fb.group({
      songTitle: ['', Validators.required ],
      songNumber: ['', Validators.required ],
      songWriters: ['', Validators.required ],
      durationMinutes: ['', Validators.required ],
      durationSeconds: ['', Validators.required ],
      publisher: ['', Validators.required ],
      bundleName: ['', Validators.required ],
      isrcCode: ['', Validators.required ],
      iswcCode: ['', Validators.required ],
      labelName: ['', Validators.required ],
      productCatalogueNumber: ['', Validators.required ],
      discNumber: ['', Validators.required ],
      grid: ['', Validators.required ],
      bundleId: ['', Validators.required ],
      productName: ['', Validators.required ],
      description: ['', Validators.required ]
    })
  }

  resetFields() {
    this.songForm = this.fb.group({
      songTitle: new FormControl('', Validators.required),
      songNumber: new FormControl('', Validators.required),
      songWriters: new FormControl('', Validators.required),
      durationMinutes: new FormControl('', Validators.required),
      durationSeconds: new FormControl('', Validators.required),
      publisher: new FormControl('', Validators.required),
      bundleName: new FormControl('', Validators.required),
      isrcCode: new FormControl('', Validators.required),
      iswcCode: new FormControl('', Validators.required),
      labelName: new FormControl('', Validators.required),
      productCatalogueNumber: new FormControl('', Validators.required),
      discNumber: new FormControl('', Validators.required),
      grid: new FormControl('', Validators.required),
      bundleId: new FormControl('', Validators.required),
      productName: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    })
  }

  onSubmit(value) {
    this.songService.createSong(value)
    .then(
      res => {
        this.resetFields();
        this.router.navigate(['/my-bands-music']);
      }
    )
  }

}
