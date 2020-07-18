import { Component, OnInit } from '@angular/core';
import { Education } from "../../../constant";
import {MatTableDataSource} from '@angular/material/table';

const educations: Education[] = [
  {educationGrade: 'Certification Google Maps Geospatial Conception / Credential Exam', educationDate: "Nov 2018", educationLocation: 'eTech Consulting', educationTown:'Antananarivo', educationCountry:'Madagascar'},
  {educationGrade: 'Niveau Master 2 en Système d’Information Géomatique et Décisionnel', educationDate: "2018", educationLocation: 'EMIT', educationTown:'Fianarantsoa', educationCountry:'Madagascar'},
  {educationGrade: 'Licence en Développement d’Application et Système d’Information', educationDate: "2014", educationLocation: 'EMIT', educationTown:'Fianarantsoa', educationCountry:'Madagascar'},
]

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  columnDisplayEducation: string[] = ['education']
  dataSourceEducation =  new MatTableDataSource(educations)

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceEducation.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void { }

}
