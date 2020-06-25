import {Component, AfterViewInit, OnInit} from '@angular/core';

import * as $ from 'jquery';
import {  gsap } from 'gsap';
import {repeat} from "rxjs/operators";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {


movementCubeArray: any=[
  {
    top:"translateZ(-200px) rotateX(-90deg)",
    bottom:"translateZ(-200px) rotateX(90deg)",
    back:"translateZ(-200px) rotateY(-180deg)",
    left:"translateZ(-200px) rotateY(90deg)",
    right:"translateZ(-200px) rotateY(-90deg)",
    front:"translateZ(-200px) rotateY(0deg)"

  }
]
  constructor() { }

  ngOnInit(): void   {
this.moveCube()
  }



moveCube(){


  let tl= gsap.timeline()

  tl.to( '.cube', {rotateY:360} )



}

  frontOnTop(){
    let tl= gsap.timeline()

    tl.to('.cube',{ transform: this.movementCubeArray[0].top} )



}

  frontOnBottom(){
    let tl= gsap.timeline()

    tl.to('.cube',{ transform: this.movementCubeArray[0].bottom} )
}

frontOnBack(){
  let tl= gsap.timeline()

  tl.to('.cube',{ transform: this.movementCubeArray[0].back} )

    .to('.groupP', {display:'none', duration:0})
    .to('#page_project', {opacity:1, display:'none'})
    .to('#waisatusMovie', {display:'block'})



}

  frontOnLeft(){
  let tl= gsap.timeline()

  tl.to('.cube',{ transform: this.movementCubeArray[0].left} )
    .to('.groupP', {display:'none'})

    .to('#page_project', {opacity:0, display:'none'})
    .to('#pokemon', {display:'block'})
}

  frontOnRight(){
  let tl= gsap.timeline()

  tl.to('.cube',{ transform: this.movementCubeArray[0].right} )
    .to('.groupP', {display:'none'})

    .to('#page_project', {opacity:0, display:'none'})
    .to('#todolist_react', {display:'block'})

}

/* From Right movement*/

  rightOnFront(){
    let tl= gsap.timeline()

    tl.to('.cube',{ transform: this.movementCubeArray[0].front} )
      .to('.groupP', {display:'none'})

      .to('#page_project', {opacity:1, display:'block'})
  }


  newColor(){
    let red= Math.floor(Math.random()*(255-1)+ 1)
    let blue= Math.floor(Math.random()*(255-1)+ 1)
    let green= Math.floor(Math.random()*(255-1)+ 1)
console.log(red, green, blue)


    gsap.to('.cube',{backgroundColor : 'rgba('+red+','+ blue+','+ green+','+ 0.01+')', stagger:2 } )

  }
}
