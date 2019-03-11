import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { EventsService } from '../shared/services/events.service';


@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {

  eventForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private eventsService: EventsService
  ) { }

  ngOnInit() {
    this.createForm()
  }

  createForm() {
    this.eventForm = this.fb.group({
      eventTitle: ['', Validators.required ],
      eventDescription: ['', Validators.required ],
      eventVenue: ['', Validators.required ],
      eventPostcode: ['', Validators.required ],
      eventDate: ['', Validators.required ],
      eventStartTime: ['', Validators.required ],
      eventPrice: ['', Validators.required ],
      availableTickets: ['', Validators.required ]
    })
  }

  resetFields() {
    this.eventForm = this.fb.group({
      eventTitle: new FormControl('', Validators.required),
      eventDescripton: new FormControl('', Validators.required),
      eventVenue: new FormControl('', Validators.required),
      eventPostcode: new FormControl('', Validators.required),
      eventDate: new FormControl('', Validators.required),
      eventStartTime: new FormControl('', Validators.required),
      eventPrice: new FormControl('', Validators.required),
      avialableTickets: new FormControl('', Validators.required),
    })
  }

  onSubmit(value) {
    this.eventsService.createEvent(value)
    .then(
      res => {
        this.resetFields();
        this.router.navigate(['/my-bands-events']);
      }
    )
  }

}
