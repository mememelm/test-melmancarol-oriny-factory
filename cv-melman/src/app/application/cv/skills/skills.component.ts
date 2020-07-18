import { Component, OnInit } from '@angular/core';
import { Skill } from "../../../constant";
import { MatTableDataSource } from '@angular/material/table';

const skills: Skill[] = [
  {skillCategory:'Suivie de projet', skillName:'JIRA, Trello'},
  {skillCategory:'Langage de programmation', skillName:'Fullstack Python'},
  {skillCategory:'Technologie web', skillName:'Angular, ReactJS, Webpack, ExtJS/GeoExt'},
  {skillCategory:'SIG', skillName:'Gmaps API V3, Openlayer API'},
  {skillCategory:'Intégration continue', skillName:'SVN, git'},
  {skillCategory:'SGBD', skillName:'Oracle, MySQL, Postgresql/PostGiS, NoSQL'}
]

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  columnDisplayedSkill : string [] = ['skill']
  dataSourceSkill = new MatTableDataSource(skills)  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceSkill.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void { }

}
