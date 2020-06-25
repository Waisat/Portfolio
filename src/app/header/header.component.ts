import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

import {gsap} from 'gsap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
scrollDowns: boolean= false;
  constructor() { }

  ngOnInit(): void {
    this.animeOnLoadHeader()


  }

  scrollDown(){
    this.scrollDowns=true
  let aboutMeSection=  $('#about_me');

    $('html, body').animate({
      scrollTop:aboutMeSection.offset().top
    }, 800, function() {


      console.log('Scroll Down')


  })



}

animeOnLoadHeader(){
  let tl = gsap.timeline();

  tl.from('h1', {y:-100, opacity:0.2, duration:1, ease:'bounce'})
    .from('h2',{y:100, opacity:0.2, duration:1})


}



}
