import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-information',
  templateUrl: './global-information.component.html',
  styleUrls: ['./global-information.component.css']
})
export class GlobalInformationComponent implements OnInit {

  cvTitle = 'Carol'

  // information
  personLastName = 'rabearivony'
  personFirstName = 'carol'
  personAge = '28'
  personSkill = 'développeur frontend'
  personTechnology = 'angular'
  personCellular = '+261 34 45 720 72'
  personEmail = 'carol.arivony@gmail.com'
  personLinkedin = 'https://www.linkedin.com/in/melman-carol'
  personAddress = 'ambohimiandra - antananarivo'
  personCountry = 'madagascar'
 
  panelOpenState = false

  constructor() { }

  ngOnInit(): void {
  }

}
