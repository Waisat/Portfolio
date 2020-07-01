import {Component, AfterViewInit, OnInit} from '@angular/core';

import * as $ from 'jquery';
import {gsap} from 'gsap';
import {repeat} from "rxjs/operators";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements AfterViewInit {
  idState:string='';
  running: boolean= false;
  backMoved: boolean= false;
 leftMoved: boolean= false;
  rightMoved: boolean= false;
  topMoved: boolean= false;
  bottomMoved: boolean= false;
  frontMoved: boolean= true;

  projects: any= [

    {
      id:1,
      title:'Movie Database',
      identification:'waisatusMovie',
      intro:'Uilisation de l\'Api Movie Database, pour créer une application de type allociné',
      notions:'HTTP GET & POST, State & Props, Arrow function',
      tools:'POSTMAN, Photoshop, WEB Storm IDE, WEB Storm IDE',

    },

    {
      id:2,
      title:'ToDo_List codé en React',
      identification:'todolist_react',
      intro:'Utilisation de la librairie React Js, ajout, mise à jour, supprésion et sauvegarde des Tasks.\n' +
        '      Cette exercice permet de comprendre les oppérations de CRUD essentielles pour l\'interraction',
      notions:'CRUD opération, State & Props, Arrow function',
      tools:'POSTMAN, Photoshop, WEB Storm IDE, WEB Storm IDE',

    },

    {
      id:3,
      title:'PokeApi, ANGULAR',
      identification:'pokemon',
      intro:'Utilisation de la librairie Angular, Affichage des 150 premiers pokemons, fiche détaillé',
      notions:'Requette HTTP Get, Parcourir des objets ou des array, Affichage de SPrite',
      tools:'POSTMAN, Photoshop, WEB Storm IDE, WEB Storm IDE',


    },

    {
      id:4,
      title:'Projets Développement Web',
      identification:'page_project',
      intro:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac quam sit amet sapien aliquet ultricies. Phasellus cursus lorem risus, eu fermentum ipsum fermentum ut. Donec tincidunt tristique tempus. Ut leo orci, placerat ut placerat quis, laoreet id massa. Maecenas vel massa eu mi pharetra condimentum. Sed pellentesque massa quis maximus gravida. Sed placerat tortor quis nulla imperdiet euismod. \n' +
        '\n' +
        '     Curabitur tristique dignissim velit, ac volutpat purus auctor a.'

    }
  ]


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

  ngAfterViewInit(): void   {
    this.moveCube()
    this.newColor()
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

  if(this.running){

    return
  }else {

    if (this.backMoved != true) {


      this.running = true
      this.leftMoved = false;
      this.rightMoved = false;
      this.topMoved = false;
      this.bottomMoved = false;
      this.frontMoved = false;

      tl.to('.cube', {transform: this.movementCubeArray[0].back})
        .to('.groupP', {display: 'none', duration: 0})
      this.getIdElementTrigger('waisatusMovie')
        tl.to('#page_project', { display: 'none'})
        .to('#waisatusMovie', {display: 'block'})



      this.backMoved = true
      this.newColor()

    }
    return this.running = false
  }
}

    getIdElementTrigger(elementTrigger){

    this.idState=elementTrigger;



      return  this.idState
    }

  frontOnLeft(){
  let tl= gsap.timeline()


    if(this.running) {
    return
    }else{

      if (this.leftMoved === false) {
        this.running= true
        this.backMoved = false;
        this.rightMoved = false;
        this.topMoved = false;
        this.bottomMoved = false;
        this.frontMoved = false;
        tl.to('.cube', {transform: this.movementCubeArray[0].left})
          .to('.groupP', {display: 'none'})

          .to('#page_project', { display: 'none'})
          .to('#pokemon', {display: 'block'})
        this.getIdElementTrigger('pokemon')
        this.leftMoved = true
        this.newColor()
      }
      return this.running = false
    }
}

  frontOnRight(){
  let tl= gsap.timeline()

    if(this.running) {
      return
    }else{

      if (this.rightMoved === false) {
        this.running= true
        this.backMoved = false;
        this.leftMoved = false;
        this.topMoved = false;
        this.bottomMoved = false;
        this.frontMoved = false;
        tl.to('.cube', {transform: this.movementCubeArray[0].right})
          .to('.groupP', {display: 'none'})

          .to('#page_project', {display: 'none'})
          .to('#todolist_react', {display: 'block'})
        this.getIdElementTrigger('todolist_react')
        this.rightMoved = true

        this.newColor()
      }
    return this.running = false
    }

}

/* From Right movement*/

  rightOnFront(){
    let tl= gsap.timeline()

    if(this.running) {
    return

    }else{
      if (this.frontMoved === false) {
        this.running= true
        this.backMoved = false;
        this.leftMoved = false;
        this.topMoved = false;
        this.bottomMoved = false;
        this.rightMoved = false;
        tl.to('.cube', {transform: this.movementCubeArray[0].front})
          .to('.groupP', { display: 'none'})
          .to('#page_project', {opacity: 1, display: 'block'})

        this.getIdElementTrigger('page_project')
        this.frontMoved = true
        this.newColor()

      }
      return this.running = false
    }
  }


  newColor(){
    let red= Math.floor(Math.random()*(255-1)+ 1)
    let blue= Math.floor(Math.random()*(255-1)+ 1)
    let green= Math.floor(Math.random()*(255-1)+ 1)
console.log(red, green, blue)
    gsap.to('.cube__face',{backgroundColor : 'rgba('+red+','+ blue+','+ green+','+ 0.4+')' } )



  }
}
