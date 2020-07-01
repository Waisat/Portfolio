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
    this.animationButtonDown()


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

  animationButtonDown(){

   let buttonMoveAnime= $('.click');



   buttonMoveAnime.animate({
     marginTop: "+=30"
   },3000, function () {
     buttonMoveAnime.animate({
       marginBottom: "+=30"},3000)
     buttonMoveAnime.stop(true).css('margin', '50% 35%')
   })
   console.log('button test', buttonMoveAnime.val())
    this.intervalFunction()

}

intervalFunction(){

    setInterval(()=>this.animationButtonDown(), 3000)
}


}
