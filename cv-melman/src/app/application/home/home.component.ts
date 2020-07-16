import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  personFullName = 'rabearivony carol'
  personSpeciality = 'frontend développeur'
  personExperiences = '+3 ans d\'expériences'
  personState = 'Disponible de suite'

  constructor() { }

  ngOnInit(): void {
  }

}
