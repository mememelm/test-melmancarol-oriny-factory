import { Component, OnInit } from '@angular/core';
import { Strength } from "../../../constant";

const strengths: Strength[] = [
  {strengthDescription:'S’adapte facilement à de nouvelles technologies'},
  {strengthDescription:'Facilité d’apprentissage'},
]

@Component({
  selector: 'app-strengths',
  templateUrl: './strengths.component.html',
  styleUrls: ['./strengths.component.css']
})
export class StrengthsComponent implements OnInit {

  dataSourceStrength = strengths
  columnDisplayesStrength = ['strengths']
  
  ngOnInit(): void {
  }

}
