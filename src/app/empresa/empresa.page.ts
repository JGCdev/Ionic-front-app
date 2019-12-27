import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.page.html',
  styleUrls: ['./empresa.page.scss'],
})
export class EmpresaPage implements OnInit {
  profileHeader: string = '/assets/img/profile-img-bg.png';
  profileImg: string = '/assets/img/avatar.png';
  constructor() { }

  ngOnInit() {
  }

}
