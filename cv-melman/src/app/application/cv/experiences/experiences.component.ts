import { Component, OnInit } from '@angular/core';
import { Experience } from "../../../constant";
import { MatTableDataSource } from '@angular/material/table';

const experiences: Experience[] = [
  {experienceTitle: 'Lead Développeur', experienceDateStart: '2020-02-01', experienceDateEnd: '2020-07-17', 
    experienceLocation: 'B2D – Vanilla Pay', experienceTown: 'Antananarivo', experienceCountry:'Madagascar',
    experienceMissionList1: '- Organisation et attribution des tâches',
    experienceMissionList2: '- Estimation',
    experienceMissionList3: '- Conception',
    experienceMissionList4: '- Développement',
    experienceMissionList5: '- Rédaction document technique',
    experienceTechnologyBackendList: 'PHP CodeIgniter / Wordpress', experienceTechnologyFrontEnd:'Angular',
  },
  {experienceTitle: 'Ingénieur développeur en Géomatique', experienceDateStart: '2018-04-03', experienceDateEnd: '2019-12-31', 
    experienceLocation: 'eTech Consulting', experienceTown: 'Antananarivo', experienceCountry:'Madagascar',
    experienceMissionList1: '- Développement maquette BIM',
    experienceMissionList2: '- Mise en place d’algorithme de traitement des nuages de points',
    experienceMissionList3: '- Création workflow',
    experienceMissionList4: '- Développement d’application sur maquette de fond de carte GMAPS, OSM, Openlayer',
    experienceMissionList5: '- Développement d’application statistique et dashboard', 
    experienceTechnologyBackendList: 'Python', experienceTechnologyFrontEnd:'Angular / ReactJS / ExtJS-GeoExt'
  }, 
  {experienceTitle: 'Développeur freelance en PHP', experienceDateStart: '2014-02', experienceDateEnd: '2015-10', 
    experienceLocation: 'Home Office', experienceTown: 'Fianarantsoa', experienceCountry:'Madagascar',
    experienceTechnologyBackendList: 'Laravel / CodeIgniter'
  }, 
]

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css'],
})
export class ExperiencesComponent implements OnInit {

  columnDisplayedExperience: string [] = ['experience']
  dataSourceExperience = new MatTableDataSource(experiences)

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceExperience.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void { }

}
