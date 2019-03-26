import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { SongService } from '../shared/services/song.service';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-edit-song',
  templateUrl: './edit-song.component.html',
  styleUrls: ['./edit-song.component.scss']
})
export class EditSongComponent implements OnInit {
  editForm: FormGroup;
  item: any;

  constructor(
    private router: Router,
    private songService: SongService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private afAuth: AuthService,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.data.subscribe(routeData => {
      let data = routeData['data'];
      if (data) {
        this.item = data.payload.data();
        this.item.id = data.payload.id;
        this.editSongForm();
      }
    })
  }

  editSongForm() {
    this.editForm = this.fb.group({
      songTitle: [this.item.songTitle, Validators.required],
      songNumber: [this.item.songNumber, Validators.required],
      songWriters: [this.item.songWriters, Validators.required],
      durationSeconds: [this.item.durationSeconds, Validators.required],
      durationMinutes: [this.item.durationMinutes, Validators.required],
      publisher: [this.item.publisher, Validators.required],
      //bundleName: [this.item.bundleName, Validators.required],
      labelName: [this.item.labelName, Validators.required],
      productCatalogueNumber: [this.item.productCatalogueNumber, Validators.required],
      discNumber: [this.item.discNumber, Validators.required],
      grid: [this.item.grid, Validators.required],
      isrcCode: [this.item.isrcCode, Validators.required],
      iswcCode: [this.item.iswcCode, Validators.required],
      //bundleId: [this.item.bundleId, Validators.required],
      //productName: [this.item.productName, Validators.required],
      description: [this.item.description, Validators.required]
    })
  }

  onSubmit(value){
    this.songService.updateSong(this.item.id, value)
    .then(
      res => {
        this.location.back();
      }
    )
  }

  cancel() {
    this.location.back();
  }

}
