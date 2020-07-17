import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  personFullName = 'rabearivony carol'
  personSpeciality = 'développeur frontend'
  personExperiences = '+3 ans d\'expériences'
  personState = 'Disponible de suite'

  ngOnInit(): void { }

}
