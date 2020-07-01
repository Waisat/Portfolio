import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {gsap} from 'gsap';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  homePageActive:boolean=true;
  realisationPageActive:boolean= false;
  contactPageActive:boolean= false;
  constructor() { }

  ngOnInit(): void {
    this.activeColorNav('home')
  }

  onclickNav(elementClick){

    let elementactive = elementClick.getAttribute( 'id' )
    console.log(elementactive)
    if(elementactive=== 'home'){
      this.homePageActive= true;
      this.realisationPageActive = false;
      this.contactPageActive= false;
      elementClick.style.color= 'blue'
      this.activeColorNav(elementactive)

    }if(elementactive==='project'){
      this.realisationPageActive= true;
      this.homePageActive= false;
      this.contactPageActive= false;
      this.activeColorNav(elementactive)
    }if(elementactive==='contact'){
      this.contactPageActive= true;
      this.realisationPageActive= false;
      this.homePageActive= false;

      this.activeColorNav(elementactive)

    }

  }

  activeColorNav(choice){



   let idChoice= document.getElementById(choice)
    let classChoice= $('.noActive').css('color','black')
    console.log(classChoice)
    if(this.homePageActive){
      classChoice.val()
      idChoice.style.color='blue'
    }
    if(this.realisationPageActive){
      classChoice.val()
      idChoice.style.color='blue'
    }

    if(this.contactPageActive){
      classChoice.val()
      idChoice.style.color='blue'
    }
  }

  onClickBurgerMenu(){

  }

}
