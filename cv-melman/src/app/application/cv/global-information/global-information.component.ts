import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-information',
  templateUrl: './global-information.component.html',
  styleUrls: ['./global-information.component.css']
})
export class GlobalInformationComponent implements OnInit {

  cvTitle = 'Carol'

  personFullName = 'rabearivony carol'
  personSpeciality = 'développeur frontend'
  personExperiences = '+3 ans d\'expériences'
  personState = 'Disponible de suite'
  
  constructor() { }

  ngOnInit(): void {
  }

}
