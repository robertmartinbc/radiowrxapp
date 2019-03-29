import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { MembersService } from '../shared/services/members.service';
import { AngularFireStorageModule } from 'angularfire2/storage';

@Component({
  selector: 'app-create-member',
  templateUrl: './create-member.component.html',
  styleUrls: ['./create-member.component.scss']
})
export class CreateMemberComponent implements OnInit {

  memberForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private membersService: MembersService,
    private afs: AngularFireStorageModule
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.memberForm = this.fb.group({
      memberName: ['', Validators.required ],
      memberBio: ['', Validators.required ],
      memberDOB: ['', Validators.required ],
      memberInstrument: ['', Validators.required ],
      memberImage: ['', Validators.required]
    })
  }

  resetFields() {
    this.memberForm = this.fb.group({
      memberName: new FormControl('', Validators.required),
      memberBio: new FormControl('', Validators.required),
      memberDOB: new FormControl('', Validators.required),
      memberInstrument: new FormControl('', Validators.required),
      memberImage: new FormControl('', Validators.required)
    })
  }

  onSubmit(value) {
    this.membersService.createMember(value)
    .then(
      res => {
        this.resetFields();
        this.router.navigate(['/my-bands-members']);
      }
    )
  }
}
