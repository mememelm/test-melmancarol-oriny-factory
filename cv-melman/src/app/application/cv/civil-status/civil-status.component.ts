import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-civil-status',
  templateUrl: './civil-status.component.html',
  styleUrls: ['./civil-status.component.css']
})
export class CivilStatusComponent implements OnInit {
 
  // information top
  personLastName = 'rabearivony'
  personFirstName = 'carol'
  personAge = '28'
  personSkill = 'développeur frontend'
  personTechnology = 'angular'
  personStatus = 'marié'
  personChildren = '2'

  // information bot
  personCellular = '+261 34 45 720 72'
  personEmail = 'carol.arivony@gmail.com'
  personLinkedin = 'https://www.linkedin.com/in/melman-carol'
  personAddress = 'ambohimiandra - antananarivo'
  personCountry = 'madagascar'
  
  ngOnInit(): void { }

}
