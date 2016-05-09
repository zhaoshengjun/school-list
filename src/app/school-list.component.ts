import { Component, OnInit } from '@angular/core';
import { MdToolbar } from '@angular2-material/toolbar';
import { MdButton } from '@angular2-material/button';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MdInput } from '@angular2-material/input';
import { MdCheckbox } from '@angular2-material/checkbox';
import { MdRadioButton, MdRadioGroup, MdRadioDispatcher } from '@angular2-material/radio';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';

import { HTTP_PROVIDERS } from '@angular/http';


@Component({
  moduleId: module.id,
  selector: 'school-list-app',
  templateUrl: 'school-list.component.html',
  styleUrls: ['school-list.component.css'],
  directives: [
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MdToolbar,
    MdButton,
    MdInput,
    MdCheckbox,
    MdRadioGroup,
    MdRadioButton,
    MdIcon
  ],
  providers: [MdIconRegistry, MdRadioDispatcher, HTTP_PROVIDERS]
})
export class SchoolListAppComponent {
  schools: Object[];
  views: Object[];

  constructor() {

  }

  ngOnInit() {
    this.views = [
      {name:"Login"},
      {name:"Register"},
    ];
    this.schools = [
      {
        "id": 1,
        "name": "Harvard University",
        "image": "Harvard_University",
        "location": "Cambridge, Massachusetts",
        "types": "Private Not-For-Profit",
        "years": "4 Year College"
      },
      {
        "id": 2,
        "name": "Princeton University",
        "image": "Princeton_University",
        "location": "Princeton, New Jersey",
        "types": "Private Not-For-Profit",
        "years": "4 Year College"
      },
      {
        "id": 3,
        "name": "Yale University",
        "image": "Yale_University",
        "location": "New Haven, Connecticut",
        "types": "Private Not-For-Profit",
        "years": "4 Year College"
      },
      {
        "id": 4,
        "name": "Massachusetts Institute of Technology",
        "image": "Massachusetts_Institute_of_Technology",
        "location": "Cambridge, Massachusetts",
        "types": "Private Not-For-Profit",
        "years": "4 Year College"
      },
      {
        "id": 5,
        "name": "Stanford University",
        "image": "Stanford_University",
        "location": "Stanford, California",
        "types": "Private Not-For-Profit",
        "years": "4 Year College"
      },
      {
        "id": 6,
        "name": "California Institute of Technology	",
        "image": "California_Institute_of_Technology",
        "location": "Pasadena, California",
        "types": "Private Not-For-Profit",
        "years": "4 Year College"
      },
      {
        "id": 7,
        "name": "Columbia University in the City of New York",
        "image": "Columbia_University_in_the_City_of_New_York",
        "location": "New York, New York",
        "types": "Private Not-For-Profit",
        "years": "4 Year College"
      },
      {
        "id": 8,
        "name": "Pomona College",
        "image": "Pomona_College",
        "location": "Claremont, California",
        "types": "Private Not-For-Profit",
        "years": "4 Year College"
      }
    ]
  }
}
