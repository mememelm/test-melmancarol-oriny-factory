import { Component, OnInit } from '@angular/core';
import { Hobby } from "../../../constant";
import {MatTableDataSource} from '@angular/material/table';

const hobbies: Hobby[] = [
  {hobbyDescription: 'Jeux vidéo en ligne type MOBA'},
  {hobbyDescription: 'Membre actif du team Dota 2 TiR Throw is real 322'},
]

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {

  columnDisplayedHobbies: string [] = ['hobbies']
  public dataSourceHobby = new MatTableDataSource(hobbies)
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceHobby.filter = filterValue.trim().toLowerCase();
  }


  ngOnInit(): void { }

}
