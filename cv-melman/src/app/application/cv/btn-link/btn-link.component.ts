import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-btn-link',
  templateUrl: './btn-link.component.html',
  styleUrls: ['./btn-link.component.css']
})
export class BtnLinkComponent implements OnInit {

  // linkFacebook = 'https://web.facebook.com/lepetitmelman'
  // linkTwitter = 'https://twitter.com/MelMCarol'
  // linkLinkedin = 'https://www.linkedin.com/in/melman-carol'

  constructor(private router: Router) { }

  nagivateFacebook(){
    this.router.navigateByUrl('web.facebook.com/lepetitmelman')
  } 
  ngOnInit(): void {

  }

}
