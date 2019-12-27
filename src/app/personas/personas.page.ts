import { Component } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: 'personas.page.html',
  styleUrls: ['personas.page.scss'],
})
export class PersonasPage {
  filters: any = {
    area: false,
    loc: false
  };
  constructor() {

  }

  toggleAreaFilter() {
    this.filters.area === true ? this.filters.area = false : this.filters.area = true;
  }
  toggleLocFilter() {
    this.filters.loc === true ? this.filters.loc = false : this.filters.loc = true;;
  }
}
