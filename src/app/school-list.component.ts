import { Component } from '@angular/core';
import { MdToolbar } from '@angular2-material/toolbar';
import { MdButton } from '@angular2-material/button';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MdInput } from '@angular2-material/input';
import { MdCheckbox } from '@angular2-material/checkbox';
import { MdRadioButton, MdRadioGroup,MdRadioDispatcher } from '@angular2-material/radio';
import { MdIcon,MdIconRegistry } from '@angular2-material/icon';

import { HTTP_PROVIDERS } from '@angular/http';


@Component({
  moduleId: module.id,
  selector: 'school-list-app',
  templateUrl: 'school-list.component.html',
  styleUrls: ['school-list.component.css'],
  directives:[
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
  providers:[MdIconRegistry, MdRadioDispatcher,HTTP_PROVIDERS]
})
export class SchoolListAppComponent {
  views:Object[] = [
    {name:'My account', description:"Edit my account information", icon:"assignment ind"},
    {name:'Potential dates', description:"Find your soulmates", icon:"pets"},
  ];
  dogs:Object[] =[
    {name:"Porter"},
    {name:"Mal"},
    {name:"Razzle"},
    {name:"Koby"},
    {name:"Molly"},
    {name:"Husi"}
  ];
  formShowing = false;
}
