import { Component, OnInit } from '@angular/core';
import { Education } from "../../../constant";

const education: Education[] = [
  {educationGrade: 'Certification Google Maps Geospatial Conception / Credential Exam', educationDate: "Nov 2018", educationLocation: 'E-Tech Consulting', educationTown:'Antananarivo', educationCountry:'Madagascar'},
  {educationGrade: 'Niveau Master 2 en Système d’Information Géomatique et Décisionnel', educationDate: "2018", educationLocation: 'EMIT', educationTown:'Fianarantsoa', educationCountry:'Madagascar'},
  {educationGrade: 'Licence en Développement d’Application et Système d’Information', educationDate: "2014", educationLocation: 'EMIT', educationTown:'Fianarantsoa', educationCountry:'Madagascar'},
]

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  columnDisplayEducation = ['education']
  dataSourceEducation = education

  constructor() { }

  ngOnInit(): void {
  }

}
