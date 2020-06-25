import {AfterViewInit, Component, OnInit} from '@angular/core';
import {  gsap } from 'gsap';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements AfterViewInit {
tl:any;
  marketingBoolean: boolean= false;
  designBoolean: boolean=false;
  codingBoolean: boolean=false;
  constructor() { }

 ngAfterViewInit() {
this.enterViewPort()

  }

  enterViewPort(){

if(this.marketingBoolean === false || this.designBoolean === false || this.codingBoolean=== false){
    gsap.registerPlugin(ScrollTrigger)

    let tl= gsap.timeline({
      // yes, we can add it to an entire timeline!
      scrollTrigger: {
        trigger: "#services",
        toggleActions:"restart none none none",


      }
    })
    tl.fromTo('.scene', {opacity:0, duration:2.1, stagger:0.7}, {opacity:1, duration:2.1, stagger:0.7})

  }
  }

  backStep(){
    this.tl.reverse()
   this.marketingBoolean=false
    this.designBoolean=false
    this.codingBoolean=false
  }
  onClickRed(){

    if(this.marketingBoolean===false) {
    this.tl = gsap.timeline()

      this.tl.to('#global_services', {ease: "slow(2, 5)", marginLeft: '50px'})

        .to('#coding', {opacity: 0, duration: 0.4})
        .to('#design', {opacity: 0, duration: 0.4})
        .to('#marketing', {display:'flex', flexDirection:'row', justifyContent:'space-between'})
        .to('#title_marketing', {opacity:0, duration:1})

        .to('.cube', {duration: 0.5, rotationY: 360, ease: " slow( 0.3, 0.5, false)"})
        .to('.cube h4', {display: 'block'}, '=-50')

        .to('#description_marketing', {display:'block', duration:0.6})
        .to('#title_marketing_desc', {fontSize: '2rem', duration: 0.4})
      this.marketingBoolean = true;
    }else{

     this.backStep()
    }
  }

  onClickOrange(){

    if(this.designBoolean===false){
    this.tl= gsap.timeline()

    this.tl.to('#global_services', {  justifyContent:'left', ease: "slow(2, 5)", marginLeft:'50px', delay:1})
      .to('#coding', {opacity:0, duration:0.5}, '-=1')
      .to('#marketing',{opacity:0, duration:0.5}, '-=1')
      .to('#design', {display:'flex', flexDirection:'row', justifyContent:'space-between'})
      .to('#title_design',{opacity:0, duration:0.5})
      .to('.cube', { duration:0.5, rotationY:360, ease: " slow( 0.3, 0.5, false)"})
      .to('#description_design',{ display:'inline'})
      .to('#title_design_desc', {fontSize:'2rem', duration:1})

    this.designBoolean=true;
    }else{
      this.backStep()

    }
  }


  onClickPurple() {

    if (this.codingBoolean === false) {
      this.tl = gsap.timeline()

      this.tl.to('#global_services', {justifyContent: 'left', ease: "slow(2, 10)", marginLeft: '50px', delay: 1})
        .to('#design', {opacity: 0, duration: 0.5}, '-=1')
        .to('#marketing', {opacity: 0, duration: 0.5}, '-=1')
        .to('#coding', {display:'flex', flexDirection:'row', justifyContent:'space-between'})
        .to('#title_coding',{opacity:0, duration:0.5})
        .to('.cube', { duration:0.5, rotationY:360, ease: " slow( 0.3, 0.5, false)"})
        .to('#description_coding',{ display:'inline'})
        .to('#title_coding_desc', {fontSize:'2rem', duration:1})
   this.codingBoolean=true
    }else {
      this.backStep()
    }

  }
}
