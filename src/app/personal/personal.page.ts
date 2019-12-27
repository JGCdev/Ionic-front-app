import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.page.html',
  styleUrls: ['./personal.page.scss'],
})
export class PersonalPage implements OnInit {
  profileHeader: string = '/assets/img/profile-img-bg.png';
  profileImg: string = '/assets/img/avatar.png';
  constructor() { }

  ngOnInit() {
  }

}
