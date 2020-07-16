import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent, DevLevelComponent, EducationComponent, ExperiencesComponent, GlobalInformationComponent, 
  HobbiesComponent, LanguageLevelComponent, SkillsComponent } from './application';


const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'dev-level', component:DevLevelComponent},
  {path:'education', component:EducationComponent},
  {path:'experiences', component:ExperiencesComponent},
  {path:'information', component:GlobalInformationComponent},
  {path:'hobbies', component:HobbiesComponent},
  {path:'language', component:LanguageLevelComponent},
  {path:'skills', component:SkillsComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
