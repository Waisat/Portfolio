import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
import {  gsap } from 'gsap';
import {Input} from "@angular/core";
import {main} from "@angular/compiler-cli/src/main";

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements AfterViewInit , OnInit{
scrolldown:boolean= false;
@Input() checkScroll: boolean= false

  public logoImg: any=[
    {
      img:"assets/ressources/logo/javascript-js-seeklogo.com.svg",
      alt:"js_logo",
      title:"js_logo"
    },
    {
      img:"assets/ressources/logo/angular-seeklogo.com.svg",
      alt:"angular_logo",
      title:"angular_logo"
    },

    {
      img:"assets/ressources/logo/react-seeklogo.com.svg",
      alt:"react_logo",
      title:"react_logo"
    },

    {
      img:"assets/ressources/logo/jquery-seeklogo.com.svg",
      alt:"jquery_logo",
      title:"jquery"
    },

    {
      img:"assets/ressources/logo/php_PNG50.png",
      alt:"php_logo",
      title:"php"
    },
    {
      img:"assets/ressources/logo/jamstack-seeklogo.com.svg",
      alt:"jamStack_logo",
      title:"jamStack"
    },
  ]

  constructor() { }

  ngOnInit(): void {


  }
  ngAfterViewInit() {

    this.onScrollAnimate()
    this.load()

  }


  onMouseHover(){
    let logo= document.getElementsByClassName('logo');


  }

  load(){
  if(this.checkScroll===true){
    console.log('trueeeee')
  }


  }


      onScrollAnimate(){


    gsap.registerPlugin(ScrollTrigger)

    let tl= gsap.timeline({
      // yes, we can add it to an entire timeline!
      scrollTrigger: {
        trigger: "#about_me",
       toggleActions:"restart none none none"
      /*  pin: true,   // pin the trigger element while active
        start: "top top", // when the top of the trigger hits the top of the viewport
        end: "+=500", // end after scrolling 500px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar*/
      }
      })
     tl  /*.to('.about-rec',{scrollTrigger:'#about_me', width:0,borderRadius:10, boxShadow:'5px 10px', duration:1})*/
    .from('#text',{opacity:0, duration:2}, '-=1.5')

   .from('.rectangle',{ x:600, opacity:0, duration:1, stagger:1}, '-=2.2')
    .from('.logo',{opacity:0, duration:0.8, stagger:0.3 }, '-=2')
  gsap.to('.logo', {y:50, duration:3, ease:'bounce', repeat: -1})



  }



  generateGrid(){
  let mainGrid= $('.grid');
    const about="about me";
    let i


    for(i=1; i < about.length-1;i++){
      let board= document.createElement('div')
      board.className="about-rec"
      board.style.width='250px'
      board.style.height='100%'
      board.style.backgroundColor='black'

      mainGrid.append(board)

    }



  }
  scrollDownService() {
    this.scrolldown = true
    let service = $('#services');

    $('html, body').animate({
      scrollTop: service.offset().top
    }, 800, function () {


      console.log('Scroll Down')


    })
  }

}
