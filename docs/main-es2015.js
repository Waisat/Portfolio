(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about-me/about-me.component.ts":
/*!************************************************!*\
  !*** ./src/app/about-me/about-me.component.ts ***!
  \************************************************/
/*! exports provided: AboutMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeComponent", function() { return AboutMeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/services.component */ "./src/app/services/services.component.ts");







function AboutMeComponent_img_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 18);
} if (rf & 2) {
    const skill_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", skill_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", skill_r1.alt)("title", skill_r1.title);
} }
class AboutMeComponent {
    constructor() {
        this.scrolldown = false;
        this.checkScroll = false;
        this.logoImg = [
            {
                img: "assets/ressources/logo/javascript-js-seeklogo.com.svg",
                alt: "js_logo",
                title: "js_logo"
            },
            {
                img: "assets/ressources/logo/angular-seeklogo.com.svg",
                alt: "angular_logo",
                title: "angular_logo"
            },
            {
                img: "assets/ressources/logo/react-seeklogo.com.svg",
                alt: "react_logo",
                title: "react_logo"
            },
            {
                img: "assets/ressources/logo/jquery-seeklogo.com.svg",
                alt: "jquery_logo",
                title: "jquery"
            },
            {
                img: "assets/ressources/logo/php_PNG50.png",
                alt: "php_logo",
                title: "php"
            },
            {
                img: "assets/ressources/logo/jamstack-seeklogo.com.svg",
                alt: "jamStack_logo",
                title: "jamStack"
            },
        ];
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.onScrollAnimate();
        this.load();
    }
    onMouseHover() {
        let logo = document.getElementsByClassName('logo');
    }
    load() {
        if (this.checkScroll === true) {
            console.log('trueeeee');
        }
    }
    onScrollAnimate() {
        gsap__WEBPACK_IMPORTED_MODULE_2__["gsap"].registerPlugin(ScrollTrigger);
        let tl = gsap__WEBPACK_IMPORTED_MODULE_2__["gsap"].timeline({
            // yes, we can add it to an entire timeline!
            scrollTrigger: {
                trigger: "#about_me",
                toggleActions: "restart none none none"
                /*  pin: true,   // pin the trigger element while active
                  start: "top top", // when the top of the trigger hits the top of the viewport
                  end: "+=500", // end after scrolling 500px beyond the start
                  scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar*/
            }
        });
        tl /*.to('.about-rec',{scrollTrigger:'#about_me', width:0,borderRadius:10, boxShadow:'5px 10px', duration:1})*/
            .from('#text', { opacity: 0, duration: 2 }, '-=1.5')
            .from('.rectangle', { x: 600, opacity: 0, duration: 1, stagger: 1 }, '-=2.2')
            .from('.logo', { opacity: 0, duration: 0.8, stagger: 0.3 }, '-=2');
        gsap__WEBPACK_IMPORTED_MODULE_2__["gsap"].to('.logo', { y: 50, duration: 3, ease: 'bounce', repeat: -1 });
    }
    generateGrid() {
        let mainGrid = jquery__WEBPACK_IMPORTED_MODULE_1__('.grid');
        const about = "about me";
        let i;
        for (i = 1; i < about.length - 1; i++) {
            let board = document.createElement('div');
            board.className = "about-rec";
            board.style.width = '250px';
            board.style.height = '100%';
            board.style.backgroundColor = 'black';
            mainGrid.append(board);
        }
    }
    scrollDownService() {
        this.scrolldown = true;
        let service = jquery__WEBPACK_IMPORTED_MODULE_1__('#services');
        jquery__WEBPACK_IMPORTED_MODULE_1__('html, body').animate({
            scrollTop: service.offset().top
        }, 800, function () {
            console.log('Scroll Down');
        });
    }
}
AboutMeComponent.ɵfac = function AboutMeComponent_Factory(t) { return new (t || AboutMeComponent)(); };
AboutMeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutMeComponent, selectors: [["app-about-me"]], inputs: { checkScroll: "checkScroll" }, decls: 28, vars: 1, consts: [[1, "filet"], [1, "grid"], ["id", "about_me"], ["id", "me_skills"], ["id", "text"], ["id", "text_about_me"], [1, "padding_text"], [3, "mouseover"], ["class", "logo", 3, "src", "alt", "title", 4, "ngFor", "ngForOf"], ["id", "img_introduce"], ["id", "me", 1, "rectangle"], ["src", "assets/ressources/aboutImg/felipe-furtado-2zDXqgTzEFE-unsplash.jpg", "alt", "unsplash Img illustration", "title", "unsplash Img illustration", 1, "resize_img"], ["id", "illustration", 1, "rectangle"], ["src", "assets/ressources/aboutImg/dj-johnson-mTH1CZWaX0Q-unsplash.jpg", "alt", "unsplash Img illustration", "title", "unsplash Img illustration", 1, "resize_img"], ["id", "second_illustration", 1, "rectangle"], ["src", "assets/ressources/aboutImg/florian-klauer-mk7D-4UCfmg-unsplash.jpg", "alt", "unsplash Img illustration", "title", "unsplash Img illustration", 1, "resize_img"], [1, "button_about_section", 3, "click"], [1, "click"], [1, "logo", 3, "src", "alt", "title"]], template: function AboutMeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "article", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "A propos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " D\u00E9veloppeur Full stack freelance avec sp\u00E9cialit\u00E9s en marketing et r\u00E9f\u00E9rencement. Rigoureux, optimiste et cr\u00E9atif dans les choses que j\u2019entreprends. Je suis pr\u00EAt \u00E0 vous accompagner dans votre r\u00E9alisation, d\u00E9veloppement ou promotion d\u2019application web.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Les diff\u00E9rentes solutions que je suis capable de vous apporter: R\u00E9alisation de la maquette de votre application web avec prise en compte de l\u2019exp\u00E9rience de navigation des utilisateurs. R\u00E9alisation des applications web \u00E0 travers diff\u00E9rents environnements de d\u00E9veloppement ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "aussi bien pour la partie Frontend que la partie Backend de votre site. R\u00E9f\u00E9rencement de vos applications web, pour renforcer votre visibilit\u00E9 ou booster vos ventes, analyses de vos flux avec Google Analytics afin d\u2019optimiser vos performances. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "article", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function AboutMeComponent_Template_article_mouseover_14_listener() { return ctx.onMouseHover(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Comp\u00EAtences");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AboutMeComponent_img_17_Template, 1, 3, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutMeComponent_Template_div_click_25_listener() { return ctx.scrollDownService(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "app-services");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.logoImg);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _services_services_component__WEBPACK_IMPORTED_MODULE_4__["ServicesComponent"]], styles: ["@media screen and (min-width: 1024px) {\n  .animated[_ngcontent-%COMP%] {\n    visibility: visible !important;\n  }\n\n  .hide-on-init[_ngcontent-%COMP%] {\n    visibility: hidden;\n  }\n\n  .filet[_ngcontent-%COMP%] {\n    height: 15px;\n    width: 80%;\n    border-bottom: solid 5px black;\n    margin-left: 20%;\n  }\n\n  #about_me[_ngcontent-%COMP%] {\n    z-index: -1;\n    overflow: hidden;\n    height: 100%;\n    display: flex;\n    flex-direction: row;\n    padding: 5em;\n    \n  }\n  #about_me[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n    line-height: 1.5;\n    text-align: justify;\n  }\n  #about_me[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-family: \"Quicksand\", sans-serif;\n    font-size: 2em;\n    text-transform: uppercase;\n  }\n  #about_me[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 10%;\n    height: auto;\n    padding: 0 1em;\n  }\n  #about_me[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    width: 50%;\n    font-size: 1.2rem;\n    font-family: \"Roboto Slab\", serif;\n  }\n  #about_me[_ngcontent-%COMP%]   #img_introduce[_ngcontent-%COMP%] {\n    width: 50%;\n    margin-top: 3%;\n  }\n  #about_me[_ngcontent-%COMP%]   #img_introduce[_ngcontent-%COMP%]   #me[_ngcontent-%COMP%] {\n    overflow: hidden;\n    margin-left: 10em;\n    margin-top: 2%;\n    position: absolute;\n    z-index: -1;\n  }\n  #about_me[_ngcontent-%COMP%]   #img_introduce[_ngcontent-%COMP%]   #illustration[_ngcontent-%COMP%] {\n    overflow: hidden;\n    margin-right: 15em;\n    margin-top: 20%;\n  }\n  #about_me[_ngcontent-%COMP%]   #img_introduce[_ngcontent-%COMP%]   #second_illustration[_ngcontent-%COMP%] {\n    overflow: hidden;\n    margin-left: -10em;\n    margin-top: -5em;\n    position: absolute;\n    z-index: -1;\n  }\n  #about_me[_ngcontent-%COMP%]   #img_introduce[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%] {\n    width: 15em;\n    height: 15em;\n    box-shadow: 12px 12px 2px 1px rgba(0, 0, 0, 0.2);\n  }\n  #about_me[_ngcontent-%COMP%]   .resize_img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n  }\n\n  .grid[_ngcontent-%COMP%] {\n    z-index: 1;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    margin-top: 5%;\n    overflow: hidden;\n  }\n\n  .button_about_section[_ngcontent-%COMP%] {\n    width: 3rem;\n    height: 6rem;\n    border: solid 5px black;\n    border-radius: 180px;\n    margin: 0 auto;\n  }\n\n  .button_about_section[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n  }\n\n  .click[_ngcontent-%COMP%] {\n    width: 40%;\n    height: 40%;\n    background-color: black;\n    border-radius: 180px;\n    margin: 50% auto;\n    -webkit-animation-duration: 10s;\n            animation-duration: 10s;\n    -webkit-animation-name: slidein;\n            animation-name: slidein;\n  }\n}\n@media screen and (min-width: 600px) and (max-width: 1024px) {\n  .animated[_ngcontent-%COMP%] {\n    visibility: visible !important;\n  }\n\n  .hide-on-init[_ngcontent-%COMP%] {\n    visibility: hidden;\n  }\n\n  .filet[_ngcontent-%COMP%] {\n    height: 15px;\n    width: 80%;\n    border-bottom: solid 5px black;\n    margin-left: 20%;\n  }\n\n  #about_me[_ngcontent-%COMP%] {\n    z-index: -1;\n    overflow: hidden;\n    height: 100%;\n    display: flex;\n    flex-direction: row;\n    padding: 5em;\n    \n  }\n  #about_me[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n    line-height: 1.5;\n    text-align: justify;\n  }\n  #about_me[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-family: \"Quicksand\", sans-serif;\n    font-size: 2em;\n    text-transform: uppercase;\n  }\n  #about_me[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 10%;\n    height: auto;\n    padding: 0 1em;\n  }\n  #about_me[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    width: 50%;\n    font-size: 1.2rem;\n    font-family: \"Roboto Slab\", serif;\n  }\n  #about_me[_ngcontent-%COMP%]   #img_introduce[_ngcontent-%COMP%] {\n    width: 50%;\n    margin-top: 3%;\n  }\n  #about_me[_ngcontent-%COMP%]   #img_introduce[_ngcontent-%COMP%]   #me[_ngcontent-%COMP%] {\n    overflow: hidden;\n    margin-left: 10em;\n    margin-top: 2%;\n    position: absolute;\n    z-index: -1;\n  }\n  #about_me[_ngcontent-%COMP%]   #img_introduce[_ngcontent-%COMP%]   #illustration[_ngcontent-%COMP%] {\n    overflow: hidden;\n    margin-right: 15em;\n    margin-top: 20%;\n  }\n  #about_me[_ngcontent-%COMP%]   #img_introduce[_ngcontent-%COMP%]   #second_illustration[_ngcontent-%COMP%] {\n    overflow: hidden;\n    margin-left: -10em;\n    margin-top: -5em;\n    position: absolute;\n    z-index: -1;\n  }\n  #about_me[_ngcontent-%COMP%]   #img_introduce[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%] {\n    width: 15em;\n    height: 15em;\n    box-shadow: 12px 12px 2px 1px rgba(0, 0, 0, 0.2);\n  }\n  #about_me[_ngcontent-%COMP%]   .resize_img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n  }\n\n  .grid[_ngcontent-%COMP%] {\n    z-index: 1;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    margin-top: 5%;\n    overflow: hidden;\n  }\n\n  .button_about_section[_ngcontent-%COMP%] {\n    width: 3rem;\n    height: 6rem;\n    border: solid 5px black;\n    border-radius: 180px;\n    margin: 0 auto;\n  }\n\n  .button_about_section[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n  }\n\n  .click[_ngcontent-%COMP%] {\n    width: 40%;\n    height: 40%;\n    background-color: black;\n    border-radius: 180px;\n    margin: 50% auto;\n    -webkit-animation-duration: 10s;\n            animation-duration: 10s;\n    -webkit-animation-name: slidein;\n            animation-name: slidein;\n  }\n}\n@media screen and (min-width: 320px) and (max-width: 600px) {\n  .animated[_ngcontent-%COMP%] {\n    visibility: visible !important;\n  }\n\n  .hide-on-init[_ngcontent-%COMP%] {\n    visibility: hidden;\n  }\n\n  .filet[_ngcontent-%COMP%] {\n    height: 15px;\n    width: 80%;\n    border-bottom: solid 5px black;\n    margin-left: 20%;\n  }\n\n  #about_me[_ngcontent-%COMP%] {\n    z-index: -1;\n    overflow: hidden;\n    height: 100%;\n    display: flex;\n    flex-direction: column-reverse;\n    padding: 5em;\n    \n  }\n  #about_me[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n    margin-top: 5%;\n  }\n  #about_me[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   #text_about_me[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n  }\n  #about_me[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .padding_text[_ngcontent-%COMP%] {\n    padding: 0 5%;\n    width: 100%;\n    text-align: left;\n  }\n  #about_me[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-family: \"Quicksand\", sans-serif;\n    font-size: 1.5rem;\n    text-transform: uppercase;\n  }\n  #about_me[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 30%;\n    height: auto;\n    padding: 0 1em;\n  }\n  #about_me[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    width: 100%;\n    font-size: 1rem;\n    font-family: \"Roboto Slab\", serif;\n  }\n  #about_me[_ngcontent-%COMP%]   #img_introduce[_ngcontent-%COMP%] {\n    width: 30%;\n    padding: 2% 1% 5% 1%;\n  }\n  #about_me[_ngcontent-%COMP%]   #img_introduce[_ngcontent-%COMP%]   #me[_ngcontent-%COMP%] {\n    overflow: hidden;\n    margin-left: 9em;\n    margin-top: 2%;\n    position: absolute;\n    z-index: -1;\n  }\n  #about_me[_ngcontent-%COMP%]   #img_introduce[_ngcontent-%COMP%]   #illustration[_ngcontent-%COMP%] {\n    overflow: hidden;\n    margin-left: 4rem;\n    margin-top: 50%;\n  }\n  #about_me[_ngcontent-%COMP%]   #img_introduce[_ngcontent-%COMP%]   #second_illustration[_ngcontent-%COMP%] {\n    overflow: hidden;\n    margin-left: -1rem;\n    margin-top: -5em;\n    position: absolute;\n    z-index: -1;\n  }\n  #about_me[_ngcontent-%COMP%]   #img_introduce[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%] {\n    width: 8em;\n    height: 8em;\n    box-shadow: 6px 6px 1px 1px rgba(0, 0, 0, 0.2);\n  }\n  #about_me[_ngcontent-%COMP%]   .resize_img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n  }\n\n  .button_about_section[_ngcontent-%COMP%] {\n    width: 8%;\n    height: 4rem;\n    border: solid 5px black;\n    border-radius: 180px;\n    margin: 0 auto;\n  }\n\n  .button_about_section[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n  }\n\n  .click[_ngcontent-%COMP%] {\n    width: 30%;\n    height: 30%;\n    background-color: black;\n    border-radius: 180px;\n    margin: 50% auto;\n    -webkit-animation-duration: 10s;\n            animation-duration: 10s;\n    -webkit-animation-name: slidein;\n            animation-name: slidein;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2psZy9yZW5kdTIvbmVlZXgvcG9ydGZvbGlvL3NyYy9hcHAvYWJvdXQtbWUvYWJvdXQtbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Fib3V0LW1lL2Fib3V0LW1lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSw4QkFBQTtFQ0NGOztFRENBO0lBQ0Usa0JBQUE7RUNFRjs7RURBQTtJQUNFLFlBQUE7SUFDQSxVQUFBO0lBQ0EsOEJBQUE7SUFDQSxnQkFBQTtFQ0dGOztFREVBO0lBRUUsV0FBQTtJQUNBLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLFlBQUE7SUFDQTttSUFBQTtFQ0NGO0VEQ0U7SUFDRSxpQkFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7RUNDSjtFREdJO0lBQ0Usb0NBQUE7SUFDQSxjQUFBO0lBQ0EseUJBQUE7RUNETjtFREtJO0lBRUUsVUFBQTtJQUNBLFlBQUE7SUFDQSxjQUFBO0VDSk47RURPSTtJQUNFLFVBQUE7SUFDQSxpQkFBQTtJQUNBLGlDQUFBO0VDTE47RURVRTtJQUNFLFVBQUE7SUFDQSxjQUFBO0VDUko7RURVSTtJQUNFLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxjQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0VDUk47RURhSTtJQUNFLGdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0VDWE47RURnQkk7SUFDRSxnQkFBQTtJQUNBLGtCQUFBO0lBQ0EsZ0JBQUE7SUFFQSxrQkFBQTtJQUNBLFdBQUE7RUNmTjtFRGtCSTtJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0EsZ0RBQUE7RUNoQk47RURxQkU7SUFDRSxXQUFBO0lBQ0EsWUFBQTtFQ25CSjs7RUR3QkE7SUFDRSxVQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLDhCQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0VDckJGOztFRHlCQTtJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0EsdUJBQUE7SUFDQSxvQkFBQTtJQUNBLGNBQUE7RUN0QkY7O0VEeUJBO0lBQ0UsZUFBQTtFQ3RCRjs7RUR5QkE7SUFDRSxVQUFBO0lBQ0EsV0FBQTtJQUNBLHVCQUFBO0lBQ0Esb0JBQUE7SUFDQSxnQkFBQTtJQUNBLCtCQUFBO1lBQUEsdUJBQUE7SUFDQSwrQkFBQTtZQUFBLHVCQUFBO0VDdEJGO0FBQ0Y7QUQyQkE7RUFFRTtJQUNFLDhCQUFBO0VDMUJGOztFRDRCQTtJQUNFLGtCQUFBO0VDekJGOztFRDJCQTtJQUNFLFlBQUE7SUFDQSxVQUFBO0lBQ0EsOEJBQUE7SUFDQSxnQkFBQTtFQ3hCRjs7RUQ2QkE7SUFFRSxXQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsWUFBQTtJQUNBO21JQUFBO0VDMUJGO0VENEJFO0lBQ0UsaUJBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0VDMUJKO0VEOEJJO0lBQ0Usb0NBQUE7SUFDQSxjQUFBO0lBQ0EseUJBQUE7RUM1Qk47RURnQ0k7SUFFRSxVQUFBO0lBQ0EsWUFBQTtJQUNBLGNBQUE7RUMvQk47RURrQ0k7SUFDRSxVQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQ0FBQTtFQ2hDTjtFRHFDRTtJQUNFLFVBQUE7SUFDQSxjQUFBO0VDbkNKO0VEcUNJO0lBQ0UsZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLGNBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7RUNuQ047RUR3Q0k7SUFDRSxnQkFBQTtJQUNBLGtCQUFBO0lBQ0EsZUFBQTtFQ3RDTjtFRDJDSTtJQUNFLGdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtJQUVBLGtCQUFBO0lBQ0EsV0FBQTtFQzFDTjtFRDZDSTtJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0EsZ0RBQUE7RUMzQ047RURnREU7SUFDRSxXQUFBO0lBQ0EsWUFBQTtFQzlDSjs7RURtREE7SUFDRSxVQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLDhCQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0VDaERGOztFRG9EQTtJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0EsdUJBQUE7SUFDQSxvQkFBQTtJQUNBLGNBQUE7RUNqREY7O0VEb0RBO0lBQ0UsZUFBQTtFQ2pERjs7RURvREE7SUFDRSxVQUFBO0lBQ0EsV0FBQTtJQUNBLHVCQUFBO0lBQ0Esb0JBQUE7SUFDQSxnQkFBQTtJQUNBLCtCQUFBO1lBQUEsdUJBQUE7SUFDQSwrQkFBQTtZQUFBLHVCQUFBO0VDakRGO0FBQ0Y7QURvREE7RUFFRTtJQUNFLDhCQUFBO0VDbkRGOztFRHFEQTtJQUNFLGtCQUFBO0VDbERGOztFRG9EQTtJQUNFLFlBQUE7SUFDQSxVQUFBO0lBQ0EsOEJBQUE7SUFDQSxnQkFBQTtFQ2pERjs7RURzREE7SUFHRSxXQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLDhCQUFBO0lBQ0EsWUFBQTtJQUNBO21JQUFBO0VDcERGO0VEd0RFO0lBQ0UsY0FBQTtFQ3RESjtFRHdESTtJQUVBLGFBQUE7SUFDRSxtQkFBQTtFQ3ZETjtFRDRESTtJQUNFLGFBQUE7SUFDQyxXQUFBO0lBQ0QsZ0JBQUE7RUMxRE47RUQ2REk7SUFDRSxvQ0FBQTtJQUNBLGlCQUFBO0lBQ0EseUJBQUE7RUMzRE47RUQrREk7SUFFRSxVQUFBO0lBQ0EsWUFBQTtJQUNBLGNBQUE7RUM5RE47RURpRUk7SUFDRSxXQUFBO0lBQ0EsZUFBQTtJQUNBLGlDQUFBO0VDL0ROO0VEcUVFO0lBQ0UsVUFBQTtJQUNBLG9CQUFBO0VDbkVKO0VEc0VJO0lBQ0UsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLGNBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7RUNwRU47RUR5RUk7SUFDRSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtFQ3ZFTjtFRDRFSTtJQUNFLGdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtJQUVBLGtCQUFBO0lBQ0EsV0FBQTtFQzNFTjtFRDhFSTtJQUNFLFVBQUE7SUFDQSxXQUFBO0lBQ0EsOENBQUE7RUM1RU47RURpRkU7SUFDRSxXQUFBO0lBQ0EsWUFBQTtFQy9FSjs7RUR1RkE7SUFDRSxTQUFBO0lBQ0EsWUFBQTtJQUNBLHVCQUFBO0lBQ0Esb0JBQUE7SUFDQSxjQUFBO0VDcEZGOztFRHdGQTtJQUNFLGVBQUE7RUNyRkY7O0VEeUZBO0lBQ0UsVUFBQTtJQUNBLFdBQUE7SUFDQSx1QkFBQTtJQUNBLG9CQUFBO0lBQ0EsZ0JBQUE7SUFDQSwrQkFBQTtZQUFBLHVCQUFBO0lBQ0EsK0JBQUE7WUFBQSx1QkFBQTtFQ3RGRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQtbWUvYWJvdXQtbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgLmFuaW1hdGVkIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmhpZGUtb24taW5pdCB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG4gIC5maWxldCB7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIHdpZHRoOiA4MCU7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgNXB4IGJsYWNrO1xuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XG5cblxuICB9XG5cbiAgI2Fib3V0X21lIHtcblxuICAgIHotaW5kZXg6IC0xO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBwYWRkaW5nOiA1ZW07XG4gICAgLyogYmFja2dyb3VuZDogcmdiKDIsMCwzNik7XG4gICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMiwwLDM2LDAuMikgMCUsIHJnYmEoMCwwLDAsMC4yKSA3JSwgcmdiYSgyNTUsMjU1LDI1NSwxKSA0NSUsIHJnYmEoMCwwLDAsMC4yKSAxMDAlKTsgKi9cbiAgICBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgfVxuXG4gICAgYXJ0aWNsZSB7XG4gICAgICBoMyB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbiAgICAgIH1cblxuICAgICAgaW1nIHtcblxuICAgICAgICB3aWR0aDogMTAlO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDAgMWVtO1xuICAgICAgfVxuXG4gICAgICBwIHtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFNsYWInLCBzZXJpZjtcbiAgICAgIH1cbiAgICB9XG5cblxuICAgICNpbWdfaW50cm9kdWNlIHtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgICBtYXJnaW4tdG9wOiAzJTtcblxuICAgICAgI21lIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwZW07XG4gICAgICAgIG1hcmdpbi10b3A6IDIlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHotaW5kZXg6IC0xO1xuXG5cbiAgICAgIH1cblxuICAgICAgI2lsbHVzdHJhdGlvbiB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogMjAlO1xuXG5cbiAgICAgIH1cblxuICAgICAgI3NlY29uZF9pbGx1c3RyYXRpb24ge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBtYXJnaW4tbGVmdDogLTEwZW07XG4gICAgICAgIG1hcmdpbi10b3A6IC01ZW07XG5cbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgIH1cblxuICAgICAgLnJlY3RhbmdsZSB7XG4gICAgICAgIHdpZHRoOiAxNWVtO1xuICAgICAgICBoZWlnaHQ6IDE1ZW07XG4gICAgICAgIGJveC1zaGFkb3c6IDEycHggMTJweCAycHggMXB4IHJnYmEoMCwgMCwgMCwgLjIpO1xuXG4gICAgICB9XG4gICAgfVxuXG4gICAgLnJlc2l6ZV9pbWcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICB9XG5cbiAgfVxuICAuZ3JpZCB7XG4gICAgei1pbmRleDogMTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luLXRvcDogNSU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICB9XG5cbiAgLmJ1dHRvbl9hYm91dF9zZWN0aW9uIHtcbiAgICB3aWR0aDogM3JlbTtcbiAgICBoZWlnaHQ6IDZyZW07XG4gICAgYm9yZGVyOiBzb2xpZCA1cHggYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMTgwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG5cbiAgfVxuICAuYnV0dG9uX2Fib3V0X3NlY3Rpb246aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICB9XG4gIC5jbGljayB7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBoZWlnaHQ6IDQwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAxODBweDtcbiAgICBtYXJnaW46IDUwJSBhdXRvO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTBzO1xuICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZWluO1xuXG4gIH1cbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuXG4gIC5hbmltYXRlZCB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xuICB9XG4gIC5oaWRlLW9uLWluaXQge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgfVxuICAuZmlsZXQge1xuICAgIGhlaWdodDogMTVweDtcbiAgICB3aWR0aDogODAlO1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDVweCBibGFjaztcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xuXG5cbiAgfVxuXG4gICNhYm91dF9tZSB7XG5cbiAgICB6LWluZGV4OiAtMTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgcGFkZGluZzogNWVtO1xuICAgIC8qIGJhY2tncm91bmQ6IHJnYigyLDAsMzYpO1xuICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDIsMCwzNiwwLjIpIDAlLCByZ2JhKDAsMCwwLDAuMikgNyUsIHJnYmEoMjU1LDI1NSwyNTUsMSkgNDUlLCByZ2JhKDAsMCwwLDAuMikgMTAwJSk7ICovXG4gICAgcCB7XG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIH1cblxuICAgIGFydGljbGUge1xuICAgICAgaDMge1xuICAgICAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gICAgICB9XG5cbiAgICAgIGltZyB7XG5cbiAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBwYWRkaW5nOiAwIDFlbTtcbiAgICAgIH1cblxuICAgICAgcCB7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBTbGFiJywgc2VyaWY7XG4gICAgICB9XG4gICAgfVxuXG5cbiAgICAjaW1nX2ludHJvZHVjZSB7XG4gICAgICB3aWR0aDogNTAlO1xuICAgICAgbWFyZ2luLXRvcDogMyU7XG5cbiAgICAgICNtZSB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMGVtO1xuICAgICAgICBtYXJnaW4tdG9wOiAyJTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB6LWluZGV4OiAtMTtcblxuXG4gICAgICB9XG5cbiAgICAgICNpbGx1c3RyYXRpb24ge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1ZW07XG4gICAgICAgIG1hcmdpbi10b3A6IDIwJTtcblxuXG4gICAgICB9XG5cbiAgICAgICNzZWNvbmRfaWxsdXN0cmF0aW9uIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xMGVtO1xuICAgICAgICBtYXJnaW4tdG9wOiAtNWVtO1xuXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgei1pbmRleDogLTE7XG4gICAgICB9XG5cbiAgICAgIC5yZWN0YW5nbGUge1xuICAgICAgICB3aWR0aDogMTVlbTtcbiAgICAgICAgaGVpZ2h0OiAxNWVtO1xuICAgICAgICBib3gtc2hhZG93OiAxMnB4IDEycHggMnB4IDFweCByZ2JhKDAsIDAsIDAsIC4yKTtcblxuICAgICAgfVxuICAgIH1cblxuICAgIC5yZXNpemVfaW1nIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgfVxuXG4gIH1cbiAgLmdyaWQge1xuICAgIHotaW5kZXg6IDE7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgfVxuXG4gIC5idXR0b25fYWJvdXRfc2VjdGlvbiB7XG4gICAgd2lkdGg6IDNyZW07XG4gICAgaGVpZ2h0OiA2cmVtO1xuICAgIGJvcmRlcjogc29saWQgNXB4IGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDE4MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuXG4gIH1cbiAgLmJ1dHRvbl9hYm91dF9zZWN0aW9uOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgfVxuICAuY2xpY2sge1xuICAgIHdpZHRoOiA0MCU7XG4gICAgaGVpZ2h0OiA0MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMTgwcHg7XG4gICAgbWFyZ2luOiA1MCUgYXV0bztcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDEwcztcbiAgICBhbmltYXRpb24tbmFtZTogc2xpZGVpbjtcblxuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG5cbiAgLmFuaW1hdGVkIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmhpZGUtb24taW5pdCB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG4gIC5maWxldCB7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIHdpZHRoOiA4MCU7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgNXB4IGJsYWNrO1xuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XG5cblxuICB9XG5cbiAgI2Fib3V0X21lIHtcblxuXG4gICAgei1pbmRleDogLTE7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gICAgcGFkZGluZzogNWVtO1xuICAgIC8qIGJhY2tncm91bmQ6IHJnYigyLDAsMzYpO1xuICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDIsMCwzNiwwLjIpIDAlLCByZ2JhKDAsMCwwLDAuMikgNyUsIHJnYmEoMjU1LDI1NSwyNTUsMSkgNDUlLCByZ2JhKDAsMCwwLDAuMikgMTAwJSk7ICovXG5cblxuICAgIGFydGljbGUge1xuICAgICAgbWFyZ2luLXRvcDo1JSA7XG5cbiAgICAgICN0ZXh0X2Fib3V0X21le1xuXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuXG5cbiAgICAgIH1cblxuICAgICAgLnBhZGRpbmdfdGV4dHtcbiAgICAgICAgcGFkZGluZzogMCA1JTtcbiAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOmxlZnQ7XG5cbiAgICAgIH1cbiAgICAgIGgzIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxuICAgICAgfVxuXG4gICAgICBpbWcge1xuXG4gICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgcGFkZGluZzogMCAxZW07XG4gICAgICB9XG5cbiAgICAgIHAge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBTbGFiJywgc2VyaWY7XG5cbiAgICAgIH1cbiAgICB9XG5cblxuICAgICNpbWdfaW50cm9kdWNlIHtcbiAgICAgIHdpZHRoOiAzMCU7XG4gICAgICBwYWRkaW5nOiAyJSAxJSA1JSAxJTtcblxuXG4gICAgICAjbWUge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBtYXJnaW4tbGVmdDogOWVtO1xuICAgICAgICBtYXJnaW4tdG9wOiAyJTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB6LWluZGV4OiAtMTtcblxuXG4gICAgICB9XG5cbiAgICAgICNpbGx1c3RyYXRpb24ge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBtYXJnaW4tbGVmdDogNHJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogNTAlO1xuXG5cbiAgICAgIH1cblxuICAgICAgI3NlY29uZF9pbGx1c3RyYXRpb24ge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBtYXJnaW4tbGVmdDogLTFyZW07XG4gICAgICAgIG1hcmdpbi10b3A6IC01ZW07XG5cbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgIH1cblxuICAgICAgLnJlY3RhbmdsZSB7XG4gICAgICAgIHdpZHRoOiA4ZW07XG4gICAgICAgIGhlaWdodDogOGVtO1xuICAgICAgICBib3gtc2hhZG93OiA2cHggNnB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAuMik7XG5cbiAgICAgIH1cbiAgICB9XG5cbiAgICAucmVzaXplX2ltZyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcblxuICAgIH1cblxuICB9XG5cblxuXG4gIC5idXR0b25fYWJvdXRfc2VjdGlvbiB7XG4gICAgd2lkdGg6IDglO1xuICAgIGhlaWdodDogNHJlbTtcbiAgICBib3JkZXI6IHNvbGlkIDVweCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAxODBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcblxuICB9XG5cbiAgLmJ1dHRvbl9hYm91dF9zZWN0aW9uOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgfVxuXG4gIC5jbGljayB7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBoZWlnaHQ6IDMwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAxODBweDtcbiAgICBtYXJnaW46IDUwJSBhdXRvO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTBzO1xuICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZWluO1xuXG4gIH1cblxufVxuIiwiQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gIC5hbmltYXRlZCB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmhpZGUtb24taW5pdCB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG5cbiAgLmZpbGV0IHtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCA1cHggYmxhY2s7XG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgfVxuXG4gICNhYm91dF9tZSB7XG4gICAgei1pbmRleDogLTE7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHBhZGRpbmc6IDVlbTtcbiAgICAvKiBiYWNrZ3JvdW5kOiByZ2IoMiwwLDM2KTtcbiAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgyLDAsMzYsMC4yKSAwJSwgcmdiYSgwLDAsMCwwLjIpIDclLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDQ1JSwgcmdiYSgwLDAsMCwwLjIpIDEwMCUpOyAqL1xuICB9XG4gICNhYm91dF9tZSBwIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIH1cbiAgI2Fib3V0X21lIGFydGljbGUgaDMge1xuICAgIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbiAgI2Fib3V0X21lIGFydGljbGUgaW1nIHtcbiAgICB3aWR0aDogMTAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAwIDFlbTtcbiAgfVxuICAjYWJvdXRfbWUgYXJ0aWNsZSBwIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90byBTbGFiXCIsIHNlcmlmO1xuICB9XG4gICNhYm91dF9tZSAjaW1nX2ludHJvZHVjZSB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW4tdG9wOiAzJTtcbiAgfVxuICAjYWJvdXRfbWUgI2ltZ19pbnRyb2R1Y2UgI21lIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbi1sZWZ0OiAxMGVtO1xuICAgIG1hcmdpbi10b3A6IDIlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAtMTtcbiAgfVxuICAjYWJvdXRfbWUgI2ltZ19pbnRyb2R1Y2UgI2lsbHVzdHJhdGlvbiB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1ZW07XG4gICAgbWFyZ2luLXRvcDogMjAlO1xuICB9XG4gICNhYm91dF9tZSAjaW1nX2ludHJvZHVjZSAjc2Vjb25kX2lsbHVzdHJhdGlvbiB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW4tbGVmdDogLTEwZW07XG4gICAgbWFyZ2luLXRvcDogLTVlbTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogLTE7XG4gIH1cbiAgI2Fib3V0X21lICNpbWdfaW50cm9kdWNlIC5yZWN0YW5nbGUge1xuICAgIHdpZHRoOiAxNWVtO1xuICAgIGhlaWdodDogMTVlbTtcbiAgICBib3gtc2hhZG93OiAxMnB4IDEycHggMnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIH1cbiAgI2Fib3V0X21lIC5yZXNpemVfaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAuZ3JpZCB7XG4gICAgei1pbmRleDogMTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luLXRvcDogNSU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIC5idXR0b25fYWJvdXRfc2VjdGlvbiB7XG4gICAgd2lkdGg6IDNyZW07XG4gICAgaGVpZ2h0OiA2cmVtO1xuICAgIGJvcmRlcjogc29saWQgNXB4IGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDE4MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG5cbiAgLmJ1dHRvbl9hYm91dF9zZWN0aW9uOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAuY2xpY2sge1xuICAgIHdpZHRoOiA0MCU7XG4gICAgaGVpZ2h0OiA0MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMTgwcHg7XG4gICAgbWFyZ2luOiA1MCUgYXV0bztcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDEwcztcbiAgICBhbmltYXRpb24tbmFtZTogc2xpZGVpbjtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLmFuaW1hdGVkIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaGlkZS1vbi1pbml0IHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cblxuICAuZmlsZXQge1xuICAgIGhlaWdodDogMTVweDtcbiAgICB3aWR0aDogODAlO1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDVweCBibGFjaztcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xuICB9XG5cbiAgI2Fib3V0X21lIHtcbiAgICB6LWluZGV4OiAtMTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgcGFkZGluZzogNWVtO1xuICAgIC8qIGJhY2tncm91bmQ6IHJnYigyLDAsMzYpO1xuICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDIsMCwzNiwwLjIpIDAlLCByZ2JhKDAsMCwwLDAuMikgNyUsIHJnYmEoMjU1LDI1NSwyNTUsMSkgNDUlLCByZ2JhKDAsMCwwLDAuMikgMTAwJSk7ICovXG4gIH1cbiAgI2Fib3V0X21lIHAge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgfVxuICAjYWJvdXRfbWUgYXJ0aWNsZSBoMyB7XG4gICAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuICAjYWJvdXRfbWUgYXJ0aWNsZSBpbWcge1xuICAgIHdpZHRoOiAxMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDAgMWVtO1xuICB9XG4gICNhYm91dF9tZSBhcnRpY2xlIHAge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIFNsYWJcIiwgc2VyaWY7XG4gIH1cbiAgI2Fib3V0X21lICNpbWdfaW50cm9kdWNlIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1hcmdpbi10b3A6IDMlO1xuICB9XG4gICNhYm91dF9tZSAjaW1nX2ludHJvZHVjZSAjbWUge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luLWxlZnQ6IDEwZW07XG4gICAgbWFyZ2luLXRvcDogMiU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IC0xO1xuICB9XG4gICNhYm91dF9tZSAjaW1nX2ludHJvZHVjZSAjaWxsdXN0cmF0aW9uIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbi1yaWdodDogMTVlbTtcbiAgICBtYXJnaW4tdG9wOiAyMCU7XG4gIH1cbiAgI2Fib3V0X21lICNpbWdfaW50cm9kdWNlICNzZWNvbmRfaWxsdXN0cmF0aW9uIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTBlbTtcbiAgICBtYXJnaW4tdG9wOiAtNWVtO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAtMTtcbiAgfVxuICAjYWJvdXRfbWUgI2ltZ19pbnRyb2R1Y2UgLnJlY3RhbmdsZSB7XG4gICAgd2lkdGg6IDE1ZW07XG4gICAgaGVpZ2h0OiAxNWVtO1xuICAgIGJveC1zaGFkb3c6IDEycHggMTJweCAycHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgfVxuICAjYWJvdXRfbWUgLnJlc2l6ZV9pbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4gIC5ncmlkIHtcbiAgICB6LWluZGV4OiAxO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgLmJ1dHRvbl9hYm91dF9zZWN0aW9uIHtcbiAgICB3aWR0aDogM3JlbTtcbiAgICBoZWlnaHQ6IDZyZW07XG4gICAgYm9yZGVyOiBzb2xpZCA1cHggYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMTgwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cblxuICAuYnV0dG9uX2Fib3V0X3NlY3Rpb246aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5jbGljayB7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBoZWlnaHQ6IDQwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAxODBweDtcbiAgICBtYXJnaW46IDUwJSBhdXRvO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTBzO1xuICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZWluO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5hbmltYXRlZCB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmhpZGUtb24taW5pdCB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG5cbiAgLmZpbGV0IHtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCA1cHggYmxhY2s7XG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgfVxuXG4gICNhYm91dF9tZSB7XG4gICAgei1pbmRleDogLTE7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gICAgcGFkZGluZzogNWVtO1xuICAgIC8qIGJhY2tncm91bmQ6IHJnYigyLDAsMzYpO1xuICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDIsMCwzNiwwLjIpIDAlLCByZ2JhKDAsMCwwLDAuMikgNyUsIHJnYmEoMjU1LDI1NSwyNTUsMSkgNDUlLCByZ2JhKDAsMCwwLDAuMikgMTAwJSk7ICovXG4gIH1cbiAgI2Fib3V0X21lIGFydGljbGUge1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICB9XG4gICNhYm91dF9tZSBhcnRpY2xlICN0ZXh0X2Fib3V0X21lIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cbiAgI2Fib3V0X21lIGFydGljbGUgLnBhZGRpbmdfdGV4dCB7XG4gICAgcGFkZGluZzogMCA1JTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG4gICNhYm91dF9tZSBhcnRpY2xlIGgzIHtcbiAgICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gICNhYm91dF9tZSBhcnRpY2xlIGltZyB7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogMCAxZW07XG4gIH1cbiAgI2Fib3V0X21lIGFydGljbGUgcCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90byBTbGFiXCIsIHNlcmlmO1xuICB9XG4gICNhYm91dF9tZSAjaW1nX2ludHJvZHVjZSB7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBwYWRkaW5nOiAyJSAxJSA1JSAxJTtcbiAgfVxuICAjYWJvdXRfbWUgI2ltZ19pbnRyb2R1Y2UgI21lIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbi1sZWZ0OiA5ZW07XG4gICAgbWFyZ2luLXRvcDogMiU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IC0xO1xuICB9XG4gICNhYm91dF9tZSAjaW1nX2ludHJvZHVjZSAjaWxsdXN0cmF0aW9uIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbi1sZWZ0OiA0cmVtO1xuICAgIG1hcmdpbi10b3A6IDUwJTtcbiAgfVxuICAjYWJvdXRfbWUgI2ltZ19pbnRyb2R1Y2UgI3NlY29uZF9pbGx1c3RyYXRpb24ge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luLWxlZnQ6IC0xcmVtO1xuICAgIG1hcmdpbi10b3A6IC01ZW07XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IC0xO1xuICB9XG4gICNhYm91dF9tZSAjaW1nX2ludHJvZHVjZSAucmVjdGFuZ2xlIHtcbiAgICB3aWR0aDogOGVtO1xuICAgIGhlaWdodDogOGVtO1xuICAgIGJveC1zaGFkb3c6IDZweCA2cHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIH1cbiAgI2Fib3V0X21lIC5yZXNpemVfaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAuYnV0dG9uX2Fib3V0X3NlY3Rpb24ge1xuICAgIHdpZHRoOiA4JTtcbiAgICBoZWlnaHQ6IDRyZW07XG4gICAgYm9yZGVyOiBzb2xpZCA1cHggYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMTgwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cblxuICAuYnV0dG9uX2Fib3V0X3NlY3Rpb246aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5jbGljayB7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBoZWlnaHQ6IDMwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAxODBweDtcbiAgICBtYXJnaW46IDUwJSBhdXRvO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTBzO1xuICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZWluO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutMeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about-me',
                templateUrl: './about-me.component.html',
                styleUrls: ['./about-me.component.scss']
            }]
    }], function () { return []; }, { checkScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/animation.ts":
/*!******************************!*\
  !*** ./src/app/animation.ts ***!
  \******************************/
/*! exports provided: slideInAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInAnimation", function() { return slideInAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

const slideInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('home <=> project', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '-100%' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '100%' }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%' }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('home <=> contact', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '-100%' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '100%' }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%' }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('project <=> contact', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '-100%' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '100%' }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%' }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
    ])
]);


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about-me/about-me.component */ "./src/app/about-me/about-me.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");











const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'project', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsComponent"], data: { animation: 'project' } },
    { path: 'home', component: _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], data: { animation: 'home' } },
    { path: 'home', component: _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_4__["AboutMeComponent"] },
    { path: 'home', component: _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"] },
    { path: 'home', component: _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__["NavBarComponent"] },
    { path: 'home', component: _services_services_component__WEBPACK_IMPORTED_MODULE_7__["ServicesComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"], data: { animation: 'contact' } }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();
const routingComponents = [_projects_projects_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_4__["AboutMeComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__["NavBarComponent"], _services_services_component__WEBPACK_IMPORTED_MODULE_7__["ServicesComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"]];


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animation */ "./src/app/animation.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class AppComponent {
    constructor() {
        this.title = 'portfolio';
    }
    prepareRoute(outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 1, consts: [["outlet", "outlet"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@routeAnimations", ctx.prepareRoute(_r0));
    } }, directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__["NavBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"], data: { animation: [
            _animation__WEBPACK_IMPORTED_MODULE_1__["slideInAnimation"]
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
                animations: [
                    _animation__WEBPACK_IMPORTED_MODULE_1__["slideInAnimation"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-animate-on-scroll */ "./node_modules/ng2-animate-on-scroll/__ivy_ngcc__/fesm2015/ng2-animate-on-scroll.js");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about-me/about-me.component */ "./src/app/about-me/about-me.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_5__["AnimateOnScrollModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_8__["AboutMeComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__["NavBarComponent"], _services_services_component__WEBPACK_IMPORTED_MODULE_11__["ServicesComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_12__["ContactComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_5__["AnimateOnScrollModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["routingComponents"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_5__["AnimateOnScrollModule"].forRoot(),
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/footer/footer.component.ts");



class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 24, vars: 0, consts: [["id", "contact"], ["id", "formulaire"], ["for", "name_contact"], ["type", "text", "id", "name_contact", "name", "name_contact", 1, "input_contact"], ["for", "objet_contact"], ["type", "text", "id", "objet_contact", "name", "objet_contact", 1, "input_contact"], ["for", "mail_contact"], ["type", "text", "id", "mail_contact", "name", "mail_contact", 1, "input_contact"], ["for", "message"], ["id", "message", "name", "messsage", "rows", "7", "cols", "33", 1, "input_contact"], ["type", "submit", "name", "submit", "id", "submit_form", "value", "send", 1, "input_send"], ["id", "me_intro"], ["src", "./assets/ressources/contact/jlm2.jpg", "alt", "Jean-Louis Gallouin", "title", "Jean-Louis Gallouin d\u00E9veloppeur Full stack"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "article", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Votre nom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "L'objet de votre demande");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Votre Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "article", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Jean-Louis Gallouin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "D\u00E9veloppeur Full Stack");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-footer");
    } }, directives: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"]], styles: ["#contact[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n}\n#contact[_ngcontent-%COMP%]   #formulaire[_ngcontent-%COMP%] {\n  width: 40%;\n}\n#contact[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 5%;\n}\n#contact[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  width: auto;\n  height: 5%;\n  padding: 2%;\n}\n#contact[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border-radius: 20px;\n}\n#contact[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n#contact[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   #message[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 20px;\n}\n#contact[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   #submit_form[_ngcontent-%COMP%] {\n  width: 10%;\n  height: 8%;\n  background-color: #ff0032;\n}\n#contact[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   #submit_form[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  margin-left: 50%;\n}\n#contact[_ngcontent-%COMP%]   #me_intro[_ngcontent-%COMP%] {\n  width: 40%;\n}\n#contact[_ngcontent-%COMP%]   #me_intro[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 90px;\n  margin-left: 38%;\n}\n#contact[_ngcontent-%COMP%]   #me_intro[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n}\n#contact[_ngcontent-%COMP%]   #me_intro[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2psZy9yZW5kdTIvbmVlZXgvcG9ydGZvbGlvL3NyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQ0NGO0FERUE7RUFDRSxVQUFBO0FDQUY7QURHRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDREo7QURJSTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0ZOO0FES0k7RUFDRSxtQkFBQTtBQ0hOO0FES0k7RUFDRSxlQUFBO0FDSE47QURLSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNITjtBRE1JO0VBQ0UsVUFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBQ0pOO0FEUUk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNOTjtBRFlFO0VBQ0UsVUFBQTtBQ1ZKO0FEWUk7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0FDVk47QURhSTtFQUNFLGtCQUFBO0FDWE47QURjSTtFQUNFLGtCQUFBO0FDWk4iLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFjdHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG5cblxuI2Zvcm11bGFpcmV7XG4gIHdpZHRoOiA0MCU7XG59XG5cbiAgZm9ybXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogNSU7XG5cblxuICAgIGlucHV0LCBsYWJlbHtcbiAgICAgIHdpZHRoOmF1dG87XG4gICAgICBoZWlnaHQ6IDUlO1xuICAgICAgcGFkZGluZzogMiU7XG5cbiAgICB9XG4gICAgaW5wdXR7XG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIH1cbiAgICBsYWJlbHtcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB9XG4gICAgI21lc3NhZ2V7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgfVxuXG4gICAgI3N1Ym1pdF9mb3Jte1xuICAgICAgd2lkdGg6IDEwJTtcbiAgICAgIGhlaWdodDogOCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwwLDUwKTtcblxuICAgIH1cblxuICAgICNzdWJtaXRfZm9ybTpob3ZlcntcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIG1hcmdpbi1sZWZ0OiA1MCU7XG5cbiAgICB9XG4gIH1cblxuXG4gICNtZV9pbnRyb3tcbiAgICB3aWR0aDogNDAlO1xuXG4gICAgaW1ne1xuICAgICAgYm9yZGVyLXJhZGl1czogOTBweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAzOCU7XG4gICAgfVxuXG4gICAgaDF7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgaDJ7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICB9XG5cbn1cblxuIiwiI2NvbnRhY3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbiNjb250YWN0ICNmb3JtdWxhaXJlIHtcbiAgd2lkdGg6IDQwJTtcbn1cbiNjb250YWN0IGZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNSU7XG59XG4jY29udGFjdCBmb3JtIGlucHV0LCAjY29udGFjdCBmb3JtIGxhYmVsIHtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogNSU7XG4gIHBhZGRpbmc6IDIlO1xufVxuI2NvbnRhY3QgZm9ybSBpbnB1dCB7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG4jY29udGFjdCBmb3JtIGxhYmVsIHtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuI2NvbnRhY3QgZm9ybSAjbWVzc2FnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG4jY29udGFjdCBmb3JtICNzdWJtaXRfZm9ybSB7XG4gIHdpZHRoOiAxMCU7XG4gIGhlaWdodDogOCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMzI7XG59XG4jY29udGFjdCBmb3JtICNzdWJtaXRfZm9ybTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcbn1cbiNjb250YWN0ICNtZV9pbnRybyB7XG4gIHdpZHRoOiA0MCU7XG59XG4jY29udGFjdCAjbWVfaW50cm8gaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogOTBweDtcbiAgbWFyZ2luLWxlZnQ6IDM4JTtcbn1cbiNjb250YWN0ICNtZV9pbnRybyBoMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNjb250YWN0ICNtZV9pbnRybyBoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 0, consts: [["id", "footer", 1, "backgournd_footer"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@media screen and (min-width: 1024px) {\n  footer[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 300px;\n  }\n\n  .backgournd_footer[_ngcontent-%COMP%] {\n    background-color: grey;\n    width: 100%;\n    height: 300px;\n  }\n}\n@media screen and (min-width: 600px) and (max-width: 1024px) {\n  footer[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 300px;\n  }\n\n  .backgournd_footer[_ngcontent-%COMP%] {\n    background-color: grey;\n    width: 100%;\n    height: 300px;\n  }\n}\n@media screen and (min-width: 320px) and (max-width: 600px) {\n  footer[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 200px;\n    margin-top: 500px;\n  }\n\n  .backgournd_footer[_ngcontent-%COMP%] {\n    background-color: grey;\n    width: 100%;\n    height: 200px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2psZy9yZW5kdTIvbmVlZXgvcG9ydGZvbGlvL3NyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLGFBQUE7RUNBRjs7RURJQTtJQUNFLHNCQUFBO0lBQ0EsV0FBQTtJQUNBLGFBQUE7RUNERjtBQUNGO0FES0E7RUFDRTtJQUNFLFdBQUE7SUFDQSxhQUFBO0VDSEY7O0VET0E7SUFDRSxzQkFBQTtJQUNBLFdBQUE7SUFDQSxhQUFBO0VDSkY7QUFDRjtBRFFBO0VBRUU7SUFDRSxXQUFBO0lBQ0EsYUFBQTtJQUNBLGlCQUFBO0VDUEY7O0VEV0E7SUFDRSxzQkFBQTtJQUVBLFdBQUE7SUFDQSxhQUFBO0VDVEY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICBmb290ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzAwcHg7XG5cbiAgfVxuXG4gIC5iYWNrZ291cm5kX2Zvb3RlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICB9XG59XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgZm9vdGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuXG4gIH1cblxuICAuYmFja2dvdXJuZF9mb290ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgfVxufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcblxuICBmb290ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgbWFyZ2luLXRvcDogNTAwcHg7XG5cbiAgfVxuXG4gIC5iYWNrZ291cm5kX2Zvb3RlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcblxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjAwcHg7XG4gIH1cbn1cbiIsIkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICBmb290ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzAwcHg7XG4gIH1cblxuICAuYmFja2dvdXJuZF9mb290ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgZm9vdGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICB9XG5cbiAgLmJhY2tnb3VybmRfZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzAwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgZm9vdGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIG1hcmdpbi10b3A6IDUwMHB4O1xuICB9XG5cbiAgLmJhY2tnb3VybmRfZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjAwcHg7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../about-me/about-me.component */ "./src/app/about-me/about-me.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/footer/footer.component.ts");






class HeaderComponent {
    constructor() {
        this.scrollDowns = false;
    }
    ngOnInit() {
        this.animeOnLoadHeader();
        this.animationButtonDown();
    }
    scrollDown() {
        this.scrollDowns = true;
        let aboutMeSection = jquery__WEBPACK_IMPORTED_MODULE_1__('#about_me');
        jquery__WEBPACK_IMPORTED_MODULE_1__('html, body').animate({
            scrollTop: aboutMeSection.offset().top
        }, 800, function () {
            console.log('Scroll Down');
        });
    }
    animeOnLoadHeader() {
        let tl = gsap__WEBPACK_IMPORTED_MODULE_2__["gsap"].timeline();
        tl.from('h1', { y: -100, opacity: 0.2, duration: 1, ease: 'bounce' })
            .from('h2', { y: 100, opacity: 0.2, duration: 1 });
    }
    animationButtonDown() {
        let buttonMoveAnime = jquery__WEBPACK_IMPORTED_MODULE_1__('.click');
        buttonMoveAnime.animate({
            marginTop: "+=30"
        }, 3000, function () {
            buttonMoveAnime.animate({
                marginBottom: "+=30"
            }, 3000);
            buttonMoveAnime.stop(true).css('margin', '50% 35%');
        });
        console.log('button test', buttonMoveAnime.val());
        this.intervalFunction();
    }
    intervalFunction() {
        setInterval(() => this.animationButtonDown(), 3000);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 12, vars: 1, consts: [[1, "header"], [1, "text_header"], ["src", "assets/ressources/backgroundheader/logoPhoenix.svg", "alt", "logo", "title", "logo", 1, "logo_header"], [1, "button_about_section", 3, "click"], [1, "click"], [3, "checkScroll"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Jean-Louis Gallouin D\u00E9veloppeur Full stack");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "La cr\u00E9ativit\u00E9 au service du d\u00E9veloppement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_8_listener() { return ctx.scrollDown(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-about-me", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checkScroll", ctx.scrollDowns);
    } }, directives: [_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_3__["AboutMeComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: ["@media screen and (min-width: 1024px) {\n  #logo[_ngcontent-%COMP%] {\n    width: 180px;\n    height: auto;\n    padding: 1%;\n    margin-left: 5%;\n  }\n\n  header[_ngcontent-%COMP%] {\n    padding: 3%;\n  }\n  header[_ngcontent-%COMP%]   #cosmoHeader[_ngcontent-%COMP%] {\n    position: absolute;\n    z-index: -1;\n    width: 100%;\n    height: 100%;\n    box-shadow: 12px 12px 2px 1px rgba(0, 0, 0, 0.2);\n    display: none;\n  }\n  header[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n    overflow: hidden;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n  }\n  header[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 40%;\n  }\n  header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 4rem;\n    width: 80%;\n    font-family: \"Merriweather\", serif;\n    text-transform: uppercase;\n    line-height: 7rem;\n  }\n  header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    z-index: 1;\n    color: black;\n    width: 80%;\n    line-height: 3rem;\n    font-family: \"Pangolin\", cursive;\n    font-size: 2.6em;\n  }\n  header[_ngcontent-%COMP%]   .button_about_section[_ngcontent-%COMP%] {\n    width: 3rem;\n    height: 6rem;\n    border: solid 5px black;\n    border-radius: 180px;\n    margin: 0 auto;\n  }\n  header[_ngcontent-%COMP%]   .button_about_section[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n  }\n  header[_ngcontent-%COMP%]   .click[_ngcontent-%COMP%] {\n    width: 30%;\n    height: 30%;\n    background-color: black;\n    border-radius: 180px;\n    margin: 50% auto;\n    -webkit-animation-duration: 10s;\n            animation-duration: 10s;\n    -webkit-animation-name: slidein;\n            animation-name: slidein;\n  }\n}\n@media screen and (min-width: 600px) and (max-width: 1024px) {\n  #logo[_ngcontent-%COMP%] {\n    width: 180px;\n    height: auto;\n    padding: 1%;\n    margin-left: 5%;\n  }\n\n  header[_ngcontent-%COMP%] {\n    padding: 3%;\n  }\n  header[_ngcontent-%COMP%]   #cosmoHeader[_ngcontent-%COMP%] {\n    position: absolute;\n    z-index: -1;\n    width: 100%;\n    height: 100%;\n    box-shadow: 12px 12px 2px 1px rgba(0, 0, 0, 0.2);\n    display: none;\n  }\n  header[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n    overflow: hidden;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n  }\n  header[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 40%;\n  }\n  header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 4rem;\n    width: 80%;\n    font-family: \"Merriweather\", serif;\n    text-transform: uppercase;\n    line-height: 7rem;\n  }\n  header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    z-index: 1;\n    color: black;\n    width: 80%;\n    line-height: 3rem;\n    font-family: \"Pangolin\", cursive;\n    font-size: 2.6em;\n  }\n  header[_ngcontent-%COMP%]   .button_about_section[_ngcontent-%COMP%] {\n    width: 3rem;\n    height: 6rem;\n    border: solid 5px black;\n    border-radius: 180px;\n    margin: 0 auto;\n  }\n  header[_ngcontent-%COMP%]   .button_about_section[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n  }\n  header[_ngcontent-%COMP%]   .click[_ngcontent-%COMP%] {\n    width: 30%;\n    height: 30%;\n    background-color: black;\n    border-radius: 180px;\n    margin: 50% auto;\n    -webkit-animation-duration: 10s;\n            animation-duration: 10s;\n    -webkit-animation-name: slidein;\n            animation-name: slidein;\n  }\n}\n@media screen and (min-width: 320px) and (max-width: 600px) {\n  #logo[_ngcontent-%COMP%] {\n    width: 20%;\n    height: auto;\n    padding: 1%;\n    margin-left: 5%;\n  }\n\n  header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    justify-content: center;\n    text-align: center;\n    padding: 10% 0;\n  }\n  header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 80%;\n    margin: 0 auto;\n  }\n  header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n    text-align: center;\n    width: 100%;\n    font-family: \"Merriweather\", serif;\n    text-transform: uppercase;\n    line-height: 3rem;\n  }\n  header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    z-index: 1;\n    color: black;\n    width: 100%;\n    line-height: 3rem;\n    font-family: \"Pangolin\", cursive;\n    font-size: 1.5rem;\n    text-align: center;\n  }\n  header[_ngcontent-%COMP%]   .button_about_section[_ngcontent-%COMP%] {\n    width: 8%;\n    height: 4rem;\n    border: solid 5px black;\n    border-radius: 180px;\n    margin: 0 auto;\n  }\n  header[_ngcontent-%COMP%]   .button_about_section[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n  }\n  header[_ngcontent-%COMP%]   .click[_ngcontent-%COMP%] {\n    width: 30%;\n    height: 30%;\n    background-color: black;\n    border-radius: 180px;\n    margin: 50% auto;\n    -webkit-animation-duration: 10s;\n            animation-duration: 10s;\n    -webkit-animation-name: slidein;\n            animation-name: slidein;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2psZy9yZW5kdTIvbmVlZXgvcG9ydGZvbGlvL3NyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0lBQ0EsZUFBQTtFQ0NGOztFRENBO0lBQ0UsV0FBQTtFQ0VGO0VEQUU7SUFDRSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGdEQUFBO0lBQ0EsYUFBQTtFQ0VKO0VEQ0U7SUFDRSxnQkFBQTtJQUVBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLDZCQUFBO0VDQUo7RURFSTtJQUNFLFVBQUE7RUNBTjtFRElFO0lBQ0UsZUFBQTtJQUNBLFVBQUE7SUFDQSxrQ0FBQTtJQUNBLHlCQUFBO0lBQ0EsaUJBQUE7RUNGSjtFREtFO0lBQ0UsVUFBQTtJQUNBLFlBQUE7SUFDQSxVQUFBO0lBQ0EsaUJBQUE7SUFFQSxnQ0FBQTtJQUNBLGdCQUFBO0VDSko7RURPRTtJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0EsdUJBQUE7SUFDQSxvQkFBQTtJQUNBLGNBQUE7RUNMSjtFRFNFO0lBQ0UsZUFBQTtFQ1BKO0VEV0U7SUFDRSxVQUFBO0lBQ0EsV0FBQTtJQUNBLHVCQUFBO0lBQ0Esb0JBQUE7SUFDQSxnQkFBQTtJQUNBLCtCQUFBO1lBQUEsdUJBQUE7SUFDQSwrQkFBQTtZQUFBLHVCQUFBO0VDVEo7QUFDRjtBRGVBO0VBR0U7SUFDRSxZQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7SUFDQSxlQUFBO0VDZkY7O0VEaUJBO0lBQ0UsV0FBQTtFQ2RGO0VEZ0JFO0lBQ0Usa0JBQUE7SUFDQSxXQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxnREFBQTtJQUNBLGFBQUE7RUNkSjtFRGlCRTtJQUNFLGdCQUFBO0lBRUEsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsNkJBQUE7RUNoQko7RURrQkk7SUFDRSxVQUFBO0VDaEJOO0VEb0JFO0lBQ0UsZUFBQTtJQUNBLFVBQUE7SUFDQSxrQ0FBQTtJQUNBLHlCQUFBO0lBQ0EsaUJBQUE7RUNsQko7RURxQkU7SUFDRSxVQUFBO0lBQ0EsWUFBQTtJQUNBLFVBQUE7SUFDQSxpQkFBQTtJQUVBLGdDQUFBO0lBQ0EsZ0JBQUE7RUNwQko7RUR1QkU7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLHVCQUFBO0lBQ0Esb0JBQUE7SUFDQSxjQUFBO0VDckJKO0VEeUJFO0lBQ0UsZUFBQTtFQ3ZCSjtFRDJCRTtJQUNFLFVBQUE7SUFDQSxXQUFBO0lBQ0EsdUJBQUE7SUFDQSxvQkFBQTtJQUNBLGdCQUFBO0lBQ0EsK0JBQUE7WUFBQSx1QkFBQTtJQUNBLCtCQUFBO1lBQUEsdUJBQUE7RUN6Qko7QUFDRjtBRGlDQTtFQUVFO0lBQ0UsVUFBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0lBQ0EsZUFBQTtFQ2hDRjs7RURrQ0E7SUFFRSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0Esa0JBQUE7SUFFQSxjQUFBO0VDakNGO0VEcUNBO0lBQ0UsVUFBQTtJQUNBLGNBQUE7RUNuQ0Y7RUR1Q0U7SUFDRSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLGtDQUFBO0lBQ0EseUJBQUE7SUFDQSxpQkFBQTtFQ3JDSjtFRHdDRTtJQUNFLFVBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtJQUNBLGlCQUFBO0lBRUEsZ0NBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0VDdkNKO0VEMENFO0lBQ0UsU0FBQTtJQUNBLFlBQUE7SUFDQSx1QkFBQTtJQUNBLG9CQUFBO0lBQ0EsY0FBQTtFQ3hDSjtFRDRDRTtJQUNFLGVBQUE7RUMxQ0o7RUQ4Q0U7SUFDRSxVQUFBO0lBQ0EsV0FBQTtJQUNBLHVCQUFBO0lBQ0Esb0JBQUE7SUFDQSxnQkFBQTtJQUNBLCtCQUFBO1lBQUEsdUJBQUE7SUFDQSwrQkFBQTtZQUFBLHVCQUFBO0VDNUNKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSAge1xuICAjbG9nbyB7XG4gICAgd2lkdGg6IDE4MHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAxJTtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gIH1cbiAgaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAzJTtcblxuICAgICNjb3Ntb0hlYWRlciB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB6LWluZGV4OiAtMTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgYm94LXNoYWRvdzogMTJweCAxMnB4IDJweCAxcHggcmdiYSgwLCAwLCAwLCAuMik7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC5oZWFkZXIge1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcblxuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBoMSB7XG4gICAgICBmb250LXNpemU6IDRyZW07XG4gICAgICB3aWR0aDogODAlO1xuICAgICAgZm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXInLCBzZXJpZjtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBsaW5lLWhlaWdodDogN3JlbTtcbiAgICB9XG5cbiAgICBoMiB7XG4gICAgICB6LWluZGV4OiAxO1xuICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgd2lkdGg6IDgwJTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xuXG4gICAgICBmb250LWZhbWlseTogJ1BhbmdvbGluJywgY3Vyc2l2ZTtcbiAgICAgIGZvbnQtc2l6ZTogMi42ZW07XG4gICAgfVxuXG4gICAgLmJ1dHRvbl9hYm91dF9zZWN0aW9uIHtcbiAgICAgIHdpZHRoOiAzcmVtO1xuICAgICAgaGVpZ2h0OiA2cmVtO1xuICAgICAgYm9yZGVyOiBzb2xpZCA1cHggYmxhY2s7XG4gICAgICBib3JkZXItcmFkaXVzOiAxODBweDtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuXG4gICAgfVxuXG4gICAgLmJ1dHRvbl9hYm91dF9zZWN0aW9uOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgIH1cblxuICAgIC5jbGljayB7XG4gICAgICB3aWR0aDogMzAlO1xuICAgICAgaGVpZ2h0OiAzMCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE4MHB4O1xuICAgICAgbWFyZ2luOiA1MCUgYXV0bztcbiAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTBzO1xuICAgICAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlaW47XG5cbiAgICB9XG4gIH1cbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuXG5cbiAgI2xvZ28ge1xuICAgIHdpZHRoOiAxODBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogMSU7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICB9XG4gIGhlYWRlciB7XG4gICAgcGFkZGluZzogMyU7XG5cbiAgICAjY29zbW9IZWFkZXIge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgei1pbmRleDogLTE7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGJveC1zaGFkb3c6IDEycHggMTJweCAycHggMXB4IHJnYmEoMCwgMCwgMCwgLjIpO1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAuaGVhZGVyIHtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG5cbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaDEge1xuICAgICAgZm9udC1zaXplOiA0cmVtO1xuICAgICAgd2lkdGg6IDgwJTtcbiAgICAgIGZvbnQtZmFtaWx5OiAnTWVycml3ZWF0aGVyJywgc2VyaWY7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgbGluZS1oZWlnaHQ6IDdyZW07XG4gICAgfVxuXG4gICAgaDIge1xuICAgICAgei1pbmRleDogMTtcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgIHdpZHRoOiA4MCU7XG4gICAgICBsaW5lLWhlaWdodDogM3JlbTtcblxuICAgICAgZm9udC1mYW1pbHk6ICdQYW5nb2xpbicsIGN1cnNpdmU7XG4gICAgICBmb250LXNpemU6IDIuNmVtO1xuICAgIH1cblxuICAgIC5idXR0b25fYWJvdXRfc2VjdGlvbiB7XG4gICAgICB3aWR0aDogM3JlbTtcbiAgICAgIGhlaWdodDogNnJlbTtcbiAgICAgIGJvcmRlcjogc29saWQgNXB4IGJsYWNrO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTgwcHg7XG4gICAgICBtYXJnaW46IDAgYXV0bztcblxuICAgIH1cblxuICAgIC5idXR0b25fYWJvdXRfc2VjdGlvbjpob3ZlciB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICB9XG5cbiAgICAuY2xpY2sge1xuICAgICAgd2lkdGg6IDMwJTtcbiAgICAgIGhlaWdodDogMzAlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICBib3JkZXItcmFkaXVzOiAxODBweDtcbiAgICAgIG1hcmdpbjogNTAlIGF1dG87XG4gICAgICBhbmltYXRpb24tZHVyYXRpb246IDEwcztcbiAgICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZWluO1xuXG4gICAgfVxuICB9XG5cbn1cblxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcblxuICAjbG9nbyB7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogMSU7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICB9XG4gIGhlYWRlciB7XG5cbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIHBhZGRpbmc6IDEwJSAwO1xuXG5cblxuICBpbWd7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcblxuICB9XG5cbiAgICBoMSB7XG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXInLCBzZXJpZjtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBsaW5lLWhlaWdodDogM3JlbTtcbiAgICB9XG5cbiAgICBoMiB7XG4gICAgICB6LWluZGV4OiAxO1xuICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBsaW5lLWhlaWdodDogM3JlbTtcblxuICAgICAgZm9udC1mYW1pbHk6ICdQYW5nb2xpbicsIGN1cnNpdmU7XG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuYnV0dG9uX2Fib3V0X3NlY3Rpb24ge1xuICAgICAgd2lkdGg6IDglO1xuICAgICAgaGVpZ2h0OiA0cmVtO1xuICAgICAgYm9yZGVyOiBzb2xpZCA1cHggYmxhY2s7XG4gICAgICBib3JkZXItcmFkaXVzOiAxODBweDtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuXG4gICAgfVxuXG4gICAgLmJ1dHRvbl9hYm91dF9zZWN0aW9uOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgIH1cblxuICAgIC5jbGljayB7XG4gICAgICB3aWR0aDogMzAlO1xuICAgICAgaGVpZ2h0OiAzMCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE4MHB4O1xuICAgICAgbWFyZ2luOiA1MCUgYXV0bztcbiAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTBzO1xuICAgICAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlaW47XG5cbiAgICB9XG4gIH1cblxuXG59XG4iLCJAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgI2xvZ28ge1xuICAgIHdpZHRoOiAxODBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogMSU7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICB9XG5cbiAgaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAzJTtcbiAgfVxuICBoZWFkZXIgI2Nvc21vSGVhZGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogLTE7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJveC1zaGFkb3c6IDEycHggMTJweCAycHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIGhlYWRlciAuaGVhZGVyIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgfVxuICBoZWFkZXIgLmhlYWRlciBpbWcge1xuICAgIHdpZHRoOiA0MCU7XG4gIH1cbiAgaGVhZGVyIGgxIHtcbiAgICBmb250LXNpemU6IDRyZW07XG4gICAgd2lkdGg6IDgwJTtcbiAgICBmb250LWZhbWlseTogXCJNZXJyaXdlYXRoZXJcIiwgc2VyaWY7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsaW5lLWhlaWdodDogN3JlbTtcbiAgfVxuICBoZWFkZXIgaDIge1xuICAgIHotaW5kZXg6IDE7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbGluZS1oZWlnaHQ6IDNyZW07XG4gICAgZm9udC1mYW1pbHk6IFwiUGFuZ29saW5cIiwgY3Vyc2l2ZTtcbiAgICBmb250LXNpemU6IDIuNmVtO1xuICB9XG4gIGhlYWRlciAuYnV0dG9uX2Fib3V0X3NlY3Rpb24ge1xuICAgIHdpZHRoOiAzcmVtO1xuICAgIGhlaWdodDogNnJlbTtcbiAgICBib3JkZXI6IHNvbGlkIDVweCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAxODBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuICBoZWFkZXIgLmJ1dHRvbl9hYm91dF9zZWN0aW9uOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgaGVhZGVyIC5jbGljayB7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBoZWlnaHQ6IDMwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAxODBweDtcbiAgICBtYXJnaW46IDUwJSBhdXRvO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTBzO1xuICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZWluO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAjbG9nbyB7XG4gICAgd2lkdGg6IDE4MHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAxJTtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gIH1cblxuICBoZWFkZXIge1xuICAgIHBhZGRpbmc6IDMlO1xuICB9XG4gIGhlYWRlciAjY29zbW9IZWFkZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAtMTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm94LXNoYWRvdzogMTJweCAxMnB4IDJweCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgaGVhZGVyIC5oZWFkZXIge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICB9XG4gIGhlYWRlciAuaGVhZGVyIGltZyB7XG4gICAgd2lkdGg6IDQwJTtcbiAgfVxuICBoZWFkZXIgaDEge1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICB3aWR0aDogODAlO1xuICAgIGZvbnQtZmFtaWx5OiBcIk1lcnJpd2VhdGhlclwiLCBzZXJpZjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxpbmUtaGVpZ2h0OiA3cmVtO1xuICB9XG4gIGhlYWRlciBoMiB7XG4gICAgei1pbmRleDogMTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBsaW5lLWhlaWdodDogM3JlbTtcbiAgICBmb250LWZhbWlseTogXCJQYW5nb2xpblwiLCBjdXJzaXZlO1xuICAgIGZvbnQtc2l6ZTogMi42ZW07XG4gIH1cbiAgaGVhZGVyIC5idXR0b25fYWJvdXRfc2VjdGlvbiB7XG4gICAgd2lkdGg6IDNyZW07XG4gICAgaGVpZ2h0OiA2cmVtO1xuICAgIGJvcmRlcjogc29saWQgNXB4IGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDE4MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG4gIGhlYWRlciAuYnV0dG9uX2Fib3V0X3NlY3Rpb246aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBoZWFkZXIgLmNsaWNrIHtcbiAgICB3aWR0aDogMzAlO1xuICAgIGhlaWdodDogMzAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDE4MHB4O1xuICAgIG1hcmdpbjogNTAlIGF1dG87XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMHM7XG4gICAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlaW47XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgI2xvZ28ge1xuICAgIHdpZHRoOiAyMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDElO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgfVxuXG4gIGhlYWRlciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTAlIDA7XG4gIH1cbiAgaGVhZGVyIGltZyB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuICBoZWFkZXIgaDEge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LWZhbWlseTogXCJNZXJyaXdlYXRoZXJcIiwgc2VyaWY7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsaW5lLWhlaWdodDogM3JlbTtcbiAgfVxuICBoZWFkZXIgaDIge1xuICAgIHotaW5kZXg6IDE7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xuICAgIGZvbnQtZmFtaWx5OiBcIlBhbmdvbGluXCIsIGN1cnNpdmU7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIGhlYWRlciAuYnV0dG9uX2Fib3V0X3NlY3Rpb24ge1xuICAgIHdpZHRoOiA4JTtcbiAgICBoZWlnaHQ6IDRyZW07XG4gICAgYm9yZGVyOiBzb2xpZCA1cHggYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMTgwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbiAgaGVhZGVyIC5idXR0b25fYWJvdXRfc2VjdGlvbjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIGhlYWRlciAuY2xpY2sge1xuICAgIHdpZHRoOiAzMCU7XG4gICAgaGVpZ2h0OiAzMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMTgwcHg7XG4gICAgbWFyZ2luOiA1MCUgYXV0bztcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDEwcztcbiAgICBhbmltYXRpb24tbmFtZTogc2xpZGVpbjtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class NavBarComponent {
    constructor() {
        this.homePageActive = true;
        this.realisationPageActive = false;
        this.contactPageActive = false;
    }
    ngOnInit() {
        this.activeColorNav('home');
    }
    onclickNav(elementClick) {
        let elementactive = elementClick.getAttribute('id');
        console.log(elementactive);
        if (elementactive === 'home') {
            this.homePageActive = true;
            this.realisationPageActive = false;
            this.contactPageActive = false;
            elementClick.style.color = 'blue';
            this.activeColorNav(elementactive);
        }
        if (elementactive === 'project') {
            this.realisationPageActive = true;
            this.homePageActive = false;
            this.contactPageActive = false;
            this.activeColorNav(elementactive);
        }
        if (elementactive === 'contact') {
            this.contactPageActive = true;
            this.realisationPageActive = false;
            this.homePageActive = false;
            this.activeColorNav(elementactive);
        }
    }
    activeColorNav(choice) {
        let idChoice = document.getElementById(choice);
        let classChoice = jquery__WEBPACK_IMPORTED_MODULE_1__('.noActive').css('color', 'black');
        console.log(classChoice);
        if (this.homePageActive) {
            classChoice.val();
            idChoice.style.color = 'blue';
        }
        if (this.realisationPageActive) {
            classChoice.val();
            idChoice.style.color = 'blue';
        }
        if (this.contactPageActive) {
            classChoice.val();
            idChoice.style.color = 'blue';
        }
    }
    onClickBurgerMenu() {
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 19, vars: 0, consts: [["id", "bloc_nav"], ["id", "logo", "src", "assets/ressources/backgroundheader/logoPhoenix.svg", "alt", "logo", "title", "logo"], [1, "nav-desktop", 3, "click"], ["routerLink", "/home", "routerLinkActive", "active", "id", "home", 1, "noActive"], ["home", ""], ["routerLink", "/project", "routerLinkActive", "active", "id", "project", 1, "noActive"], ["realisation", ""], ["routerLink", "/contact", "routerLinkActive", "active", "id", "contact", 1, "noActive"], ["contact", ""], [1, "fas", "fa-bars"], [1, "filet"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_Template_li_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return ctx.onclickNav(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_Template_li_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11); return ctx.onclickNav(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "R\u00E9alisation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_Template_li_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15); return ctx.onclickNav(_r2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: ["@media screen and (min-width: 1024px) {\n  #logo[_ngcontent-%COMP%] {\n    width: 180px;\n    height: auto;\n    padding: 1%;\n    margin-left: 5%;\n  }\n\n  .fas[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  #bloc_nav[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }\n  #bloc_nav[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n  }\n  #bloc_nav[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    padding: 0 5em;\n    margin-top: 5em;\n  }\n  #bloc_nav[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    color: black;\n    padding: 0 1em;\n    list-style: none;\n    font-size: 2.2em;\n  }\n  #bloc_nav[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: black;\n    text-decoration: none;\n    font-family: \"Quicksand\", sans-serif;\n  }\n  #bloc_nav[_ngcontent-%COMP%]   .filet[_ngcontent-%COMP%] {\n    height: 15px;\n    width: 80%;\n    border-bottom: solid 5px black;\n    margin-left: 20%;\n  }\n}\n@media screen and (min-width: 320px) and (max-width: 600px) {\n  #logo[_ngcontent-%COMP%] {\n    width: 30%;\n    height: auto;\n    padding: 1%;\n    margin-left: 5%;\n  }\n\n  .fas[_ngcontent-%COMP%] {\n    font-size: 2.1rem;\n    display: none;\n  }\n\n  #bloc_nav[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }\n  #bloc_nav[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n  }\n  #bloc_nav[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    padding: 0 5em;\n    margin-top: 5em;\n  }\n  #bloc_nav[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    color: black;\n    padding: 0 1em;\n    list-style: none;\n    font-size: 1.2rem;\n  }\n  #bloc_nav[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: black;\n    text-decoration: none;\n    font-family: \"Quicksand\", sans-serif;\n  }\n  #bloc_nav[_ngcontent-%COMP%]   .filet[_ngcontent-%COMP%] {\n    height: 5%;\n    width: 80%;\n    border-bottom: solid 5px black;\n    margin-left: 20%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2psZy9yZW5kdTIvbmVlZXgvcG9ydGZvbGlvL3NyYy9hcHAvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRTtJQUNFLFlBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtJQUNBLGVBQUE7RUNBRjs7RURHQTtJQUNFLGFBQUE7RUNBRjs7RURHQTtJQUVFLGFBQUE7SUFDQSxzQkFBQTtFQ0RGO0VER0U7SUFDRSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSw4QkFBQTtFQ0RKO0VESUk7SUFDRSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxjQUFBO0lBQ0EsZUFBQTtFQ0ZOO0VES007SUFDRSxZQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7RUNIUjtFREtRO0lBQ0UsWUFBQTtJQUNBLHFCQUFBO0lBQ0Esb0NBQUE7RUNIVjtFRFdFO0lBQ0UsWUFBQTtJQUNBLFVBQUE7SUFDQSw4QkFBQTtJQUNBLGdCQUFBO0VDVEo7QUFDRjtBRHVCQTtFQUVFO0lBQ0UsVUFBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0lBQ0EsZUFBQTtFQ3RCRjs7RUQ2QkE7SUFDRSxpQkFBQTtJQUNKLGFBQUE7RUMxQkU7O0VENkJBO0lBRUUsYUFBQTtJQUNBLHNCQUFBO0VDM0JGO0VENkJFO0lBQ0UsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsOEJBQUE7RUMzQko7RUQ4Qkk7SUFDRSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxjQUFBO0lBQ0EsZUFBQTtFQzVCTjtFRGdDTTtJQUNFLFlBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtFQzlCUjtFRGtDUTtJQUNFLFlBQUE7SUFDQSxxQkFBQTtJQUNBLG9DQUFBO0VDaENWO0VEd0NFO0lBQ0UsVUFBQTtJQUNBLFVBQUE7SUFDQSw4QkFBQTtJQUNBLGdCQUFBO0VDdENKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcblxuICAjbG9nbyB7XG4gICAgd2lkdGg6IDE4MHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAxJTtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gIH1cblxuICAuZmFze1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAjYmxvY19uYXYge1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgbmF2IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG5cbiAgICAgIHVsIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgcGFkZGluZzogMCA1ZW07XG4gICAgICAgIG1hcmdpbi10b3A6IDVlbTtcblxuXG4gICAgICAgIGxpIHtcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgcGFkZGluZzogMCAxZW07XG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICBmb250LXNpemU6IDIuMmVtO1xuXG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cblxuICAgIH1cblxuICAgIC5maWxldCB7XG4gICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICB3aWR0aDogODAlO1xuICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgNXB4IGJsYWNrO1xuICAgICAgbWFyZ2luLWxlZnQ6IDIwJTtcblxuXG4gICAgfVxuXG4gIH1cblxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuXG5cbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG5cbiAgI2xvZ28ge1xuICAgIHdpZHRoOiAzMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDElO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgfVxuXG4gIC5uYXYtZGVza3RvcHtcblxuICB9XG5cbiAgLmZhc3tcbiAgICBmb250LXNpemU6IDIuMXJlbTtcbmRpc3BsYXk6IG5vbmU7XG5cbiAgfVxuICAjYmxvY19uYXYge1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgbmF2IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG5cbiAgICAgIHVsIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgcGFkZGluZzogMCA1ZW07XG4gICAgICAgIG1hcmdpbi10b3A6IDVlbTtcblxuXG5cbiAgICAgICAgbGkge1xuICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICBwYWRkaW5nOiAwIDFlbTtcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuXG5cblxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG5cbiAgICB9XG5cbiAgICAuZmlsZXQge1xuICAgICAgaGVpZ2h0OiA1JTtcbiAgICAgIHdpZHRoOiA4MCU7XG4gICAgICBib3JkZXItYm90dG9tOiBzb2xpZCA1cHggYmxhY2s7XG4gICAgICBtYXJnaW4tbGVmdDogMjAlO1xuXG5cbiAgICB9XG5cbiAgfVxuXG5cbn1cbiIsIkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAjbG9nbyB7XG4gICAgd2lkdGg6IDE4MHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAxJTtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gIH1cblxuICAuZmFzIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgI2Jsb2NfbmF2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgI2Jsb2NfbmF2IG5hdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuICAjYmxvY19uYXYgbmF2IHVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgcGFkZGluZzogMCA1ZW07XG4gICAgbWFyZ2luLXRvcDogNWVtO1xuICB9XG4gICNibG9jX25hdiBuYXYgdWwgbGkge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBwYWRkaW5nOiAwIDFlbTtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMi4yZW07XG4gIH1cbiAgI2Jsb2NfbmF2IG5hdiB1bCBsaSBhIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBzYW5zLXNlcmlmO1xuICB9XG4gICNibG9jX25hdiAuZmlsZXQge1xuICAgIGhlaWdodDogMTVweDtcbiAgICB3aWR0aDogODAlO1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDVweCBibGFjaztcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICNsb2dvIHtcbiAgICB3aWR0aDogMzAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAxJTtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gIH1cblxuICAuZmFzIHtcbiAgICBmb250LXNpemU6IDIuMXJlbTtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgI2Jsb2NfbmF2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgI2Jsb2NfbmF2IG5hdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuICAjYmxvY19uYXYgbmF2IHVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogMCA1ZW07XG4gICAgbWFyZ2luLXRvcDogNWVtO1xuICB9XG4gICNibG9jX25hdiBuYXYgdWwgbGkge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBwYWRkaW5nOiAwIDFlbTtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB9XG4gICNibG9jX25hdiBuYXYgdWwgbGkgYSB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIiwgc2Fucy1zZXJpZjtcbiAgfVxuICAjYmxvY19uYXYgLmZpbGV0IHtcbiAgICBoZWlnaHQ6IDUlO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgNXB4IGJsYWNrO1xuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav-bar',
                templateUrl: './nav-bar.component.html',
                styleUrls: ['./nav-bar.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/footer/footer.component.ts");





function ProjectsComponent_div_2_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Notions abord\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Outils utilis\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1.notions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1.tools);
} }
function ProjectsComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProjectsComponent_div_2_div_1_div_5_Template, 9, 2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", project_r1.identification);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1.intro);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", project_r1.identification != "page_project");
} }
function ProjectsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectsComponent_div_2_div_1_Template, 6, 4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.idState === project_r1.identification);
} }
class ProjectsComponent {
    constructor() {
        this.idState = '';
        this.running = false;
        this.backMoved = false;
        this.leftMoved = false;
        this.rightMoved = false;
        this.topMoved = false;
        this.bottomMoved = false;
        this.frontMoved = true;
        this.projects = [
            {
                id: 1,
                title: 'Movie Database',
                identification: 'waisatusMovie',
                intro: 'Uilisation de l\'Api Movie Database, pour créer une application de type allociné',
                notions: 'HTTP GET & POST, State & Props, Arrow function',
                tools: 'POSTMAN, Photoshop, WEB Storm IDE, WEB Storm IDE',
            },
            {
                id: 2,
                title: 'ToDo_List codé en React',
                identification: 'todolist_react',
                intro: 'Utilisation de la librairie React Js, ajout, mise à jour, supprésion et sauvegarde des Tasks.\n' +
                    '      Cette exercice permet de comprendre les oppérations de CRUD essentielles pour l\'interraction',
                notions: 'CRUD opération, State & Props, Arrow function',
                tools: 'POSTMAN, Photoshop, WEB Storm IDE, WEB Storm IDE',
            },
            {
                id: 3,
                title: 'PokeApi, ANGULAR',
                identification: 'pokemon',
                intro: 'Utilisation de la librairie Angular, Affichage des 150 premiers pokemons, fiche détaillé',
                notions: 'Requette HTTP Get, Parcourir des objets ou des array, Affichage de SPrite',
                tools: 'POSTMAN, Photoshop, WEB Storm IDE, WEB Storm IDE',
            },
            {
                id: 4,
                title: 'Projets Développement Web',
                identification: 'page_project',
                intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac quam sit amet sapien aliquet ultricies. Phasellus cursus lorem risus, eu fermentum ipsum fermentum ut. Donec tincidunt tristique tempus. Ut leo orci, placerat ut placerat quis, laoreet id massa. Maecenas vel massa eu mi pharetra condimentum. Sed pellentesque massa quis maximus gravida. Sed placerat tortor quis nulla imperdiet euismod. \n' +
                    '\n' +
                    '     Curabitur tristique dignissim velit, ac volutpat purus auctor a.'
            }
        ];
        this.movementCubeArray = [
            {
                top: "translateZ(-200px) rotateX(-90deg)",
                bottom: "translateZ(-200px) rotateX(90deg)",
                back: "translateZ(-200px) rotateY(-180deg)",
                left: "translateZ(-200px) rotateY(90deg)",
                right: "translateZ(-200px) rotateY(-90deg)",
                front: "translateZ(-200px) rotateY(0deg)"
            }
        ];
    }
    ngAfterViewInit() {
        this.moveCube();
        this.newColor();
    }
    moveCube() {
        let tl = gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].timeline();
        tl.to('.cube', { rotateY: 360 });
    }
    frontOnTop() {
        let tl = gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].timeline();
        tl.to('.cube', { transform: this.movementCubeArray[0].top });
    }
    frontOnBottom() {
        let tl = gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].timeline();
        tl.to('.cube', { transform: this.movementCubeArray[0].bottom });
    }
    frontOnBack() {
        let tl = gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].timeline();
        if (this.running) {
            return;
        }
        else {
            if (this.backMoved != true) {
                this.running = true;
                this.leftMoved = false;
                this.rightMoved = false;
                this.topMoved = false;
                this.bottomMoved = false;
                this.frontMoved = false;
                tl.to('.cube', { transform: this.movementCubeArray[0].back })
                    .to('.groupP', { display: 'none', duration: 0 });
                this.getIdElementTrigger('waisatusMovie');
                tl.to('#page_project', { display: 'none' })
                    .to('#waisatusMovie', { display: 'block' });
                this.backMoved = true;
                this.newColor();
            }
            return this.running = false;
        }
    }
    getIdElementTrigger(elementTrigger) {
        this.idState = elementTrigger;
        return this.idState;
    }
    frontOnLeft() {
        let tl = gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].timeline();
        if (this.running) {
            return;
        }
        else {
            if (this.leftMoved === false) {
                this.running = true;
                this.backMoved = false;
                this.rightMoved = false;
                this.topMoved = false;
                this.bottomMoved = false;
                this.frontMoved = false;
                tl.to('.cube', { transform: this.movementCubeArray[0].left })
                    .to('.groupP', { display: 'none' })
                    .to('#page_project', { display: 'none' })
                    .to('#pokemon', { display: 'block' });
                this.getIdElementTrigger('pokemon');
                this.leftMoved = true;
                this.newColor();
            }
            return this.running = false;
        }
    }
    frontOnRight() {
        let tl = gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].timeline();
        if (this.running) {
            return;
        }
        else {
            if (this.rightMoved === false) {
                this.running = true;
                this.backMoved = false;
                this.leftMoved = false;
                this.topMoved = false;
                this.bottomMoved = false;
                this.frontMoved = false;
                tl.to('.cube', { transform: this.movementCubeArray[0].right })
                    .to('.groupP', { display: 'none' })
                    .to('#page_project', { display: 'none' })
                    .to('#todolist_react', { display: 'block' });
                this.getIdElementTrigger('todolist_react');
                this.rightMoved = true;
                this.newColor();
            }
            return this.running = false;
        }
    }
    /* From Right movement*/
    rightOnFront() {
        let tl = gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].timeline();
        if (this.running) {
            return;
        }
        else {
            if (this.frontMoved === false) {
                this.running = true;
                this.backMoved = false;
                this.leftMoved = false;
                this.topMoved = false;
                this.bottomMoved = false;
                this.rightMoved = false;
                tl.to('.cube', { transform: this.movementCubeArray[0].front })
                    .to('.groupP', { display: 'none' })
                    .to('#page_project', { opacity: 1, display: 'block' });
                this.getIdElementTrigger('page_project');
                this.frontMoved = true;
                this.newColor();
            }
            return this.running = false;
        }
    }
    newColor() {
        let red = Math.floor(Math.random() * (255 - 1) + 1);
        let blue = Math.floor(Math.random() * (255 - 1) + 1);
        let green = Math.floor(Math.random() * (255 - 1) + 1);
        console.log(red, green, blue);
        gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].to('.cube__face', { backgroundColor: 'rgba(' + red + ',' + blue + ',' + green + ',' + 0.4 + ')' });
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], decls: 37, vars: 1, consts: [["id", "group_projets"], [4, "ngFor", "ngForOf"], ["id", "nav_project"], ["id", "top", 1, "border", 3, "click"], ["id", "bottom", 1, "border", 3, "click"], ["id", "left", 1, "border", 3, "click"], ["id", "right", 1, "border", 3, "click"], ["id", "back", 1, "border", 3, "click"], ["id", "front", 1, "border", 3, "click"], [1, "scene"], [1, "cube"], [1, "cube__face", "cube__face--front"], [1, "cube__face", "cube__face--back"], ["src", "assets/ressources/projectImg/HomeGoat.jpg", 1, "logo"], [1, "cube__face", "cube__face--right"], [1, "cube__face", "cube__face--left"], [1, "img_desc"], ["src", "assets/ressources/projectImg/pokeapi.jpeg", 1, "logo"], [1, "cube__face", "cube__face--top"], [1, "cube__face", "cube__face--bottom"], ["class", "groupP", 3, "id", 4, "ngIf"], [1, "groupP", 3, "id"], [4, "ngIf"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProjectsComponent_div_2_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_Template_li_click_7_listener() { return ctx.frontOnTop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Top");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_Template_li_click_9_listener() { return ctx.frontOnBottom(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Bottom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_Template_li_click_11_listener() { return ctx.frontOnLeft(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Pokemon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_Template_li_click_13_listener() { return ctx.frontOnRight(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " To_DoList React");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_Template_li_click_15_listener() { return ctx.frontOnBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Movie_Database");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_Template_li_click_17_listener() { return ctx.rightOnFront(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Acceuil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " front");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " top");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " bottom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["@media screen and (min-width: 1024px) {\n  section[_ngcontent-%COMP%] {\n    margin: 5% auto;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n  }\n  section[_ngcontent-%COMP%]   #group_projets[_ngcontent-%COMP%] {\n    width: 40%;\n  }\n  section[_ngcontent-%COMP%]   #nav_project[_ngcontent-%COMP%] {\n    position: absolute;\n  }\n  section[_ngcontent-%COMP%]   .groupP[_ngcontent-%COMP%] {\n    position: absolute;\n    margin-right: 30%;\n    margin-top: 2rem;\n  }\n  section[_ngcontent-%COMP%]   .groupP[_ngcontent-%COMP%] {\n    width: 40%;\n    position: absolute;\n    margin-right: 30%;\n  }\n  section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    margin-left: 80%;\n  }\n  section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 1rem;\n    list-style: none;\n  }\n  section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n  }\n  section[_ngcontent-%COMP%]   #page_project[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  section[_ngcontent-%COMP%]   .scene[_ngcontent-%COMP%] {\n    width: 400px;\n    height: 400px;\n    perspective: 1200px;\n    background-color: rgba(230, 49, 31, 0.7);\n  }\n  section[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    width: 80%;\n    margin: 0 auto;\n  }\n  section[_ngcontent-%COMP%]   .img_desc[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    margin: 5%;\n  }\n  section[_ngcontent-%COMP%]   .img_desc[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin: 0 auto;\n  }\n  section[_ngcontent-%COMP%]   .cube[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    position: relative;\n    transform-style: preserve-3d;\n    background-color: rgba(231, 101, 11, 0.7);\n  }\n  section[_ngcontent-%COMP%]   .cube__face[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 400px;\n    height: 400px;\n    background-color: rgba(141, 60, 143, 0.9);\n  }\n  section[_ngcontent-%COMP%]   .cube__face--front[_ngcontent-%COMP%] {\n    transform: rotateY(0deg);\n  }\n  section[_ngcontent-%COMP%]   .cube__face--right[_ngcontent-%COMP%] {\n    transform: rotateY(90deg);\n  }\n  section[_ngcontent-%COMP%]   .cube__face--back[_ngcontent-%COMP%] {\n    transform: rotateY(180deg);\n  }\n  section[_ngcontent-%COMP%]   .cube__face--left[_ngcontent-%COMP%] {\n    transform: rotateY(-90deg);\n  }\n  section[_ngcontent-%COMP%]   .cube__face--top[_ngcontent-%COMP%] {\n    transform: rotateX(90deg);\n  }\n  section[_ngcontent-%COMP%]   .cube__face--bottom[_ngcontent-%COMP%] {\n    transform: rotateX(-90deg);\n  }\n  section[_ngcontent-%COMP%]   .cube__face--front[_ngcontent-%COMP%] {\n    transform: rotateY(0deg) translateZ(200px);\n  }\n  section[_ngcontent-%COMP%]   .cube__face--right[_ngcontent-%COMP%] {\n    transform: rotateY(90deg) translateZ(200px);\n  }\n  section[_ngcontent-%COMP%]   .cube__face--back[_ngcontent-%COMP%] {\n    transform: rotateY(180deg) translateZ(200px);\n  }\n  section[_ngcontent-%COMP%]   .cube__face--left[_ngcontent-%COMP%] {\n    transform: rotateY(-90deg) translateZ(200px);\n  }\n  section[_ngcontent-%COMP%]   .cube__face--top[_ngcontent-%COMP%] {\n    transform: rotateX(90deg) translateZ(200px);\n  }\n  section[_ngcontent-%COMP%]   .cube__face--bottom[_ngcontent-%COMP%] {\n    transform: rotateX(-90deg) translateZ(200px);\n  }\n  section[_ngcontent-%COMP%]   .cube[_ngcontent-%COMP%] {\n    transform: translateZ(-200px);\n  }\n  section[_ngcontent-%COMP%]   .cube[_ngcontent-%COMP%] {\n    transition: transform 1s;\n  }\n}\n@media screen and (min-width: 600px) and (max-width: 1024px) {\n  section[_ngcontent-%COMP%] {\n    margin: 5% auto;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n  }\n  section[_ngcontent-%COMP%]   #group_projets[_ngcontent-%COMP%] {\n    width: 40%;\n  }\n  section[_ngcontent-%COMP%]   #nav_project[_ngcontent-%COMP%] {\n    position: absolute;\n  }\n  section[_ngcontent-%COMP%]   .groupP[_ngcontent-%COMP%] {\n    position: absolute;\n    margin-right: 30%;\n    margin-top: 2rem;\n  }\n  section[_ngcontent-%COMP%]   .groupP[_ngcontent-%COMP%] {\n    width: 40%;\n    position: absolute;\n    margin-right: 30%;\n  }\n  section[_ngcontent-%COMP%]   #page_project[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  section[_ngcontent-%COMP%]   .scene[_ngcontent-%COMP%] {\n    width: 400px;\n    height: 400px;\n    perspective: 1200px;\n    background-color: rgba(230, 49, 31, 0.7);\n  }\n  section[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    width: 80%;\n    margin: 0 auto;\n  }\n  section[_ngcontent-%COMP%]   .img_desc[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    margin: 5%;\n  }\n  section[_ngcontent-%COMP%]   .img_desc[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin: 0 auto;\n  }\n  section[_ngcontent-%COMP%]   .cube[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    position: relative;\n    transform-style: preserve-3d;\n    background-color: rgba(231, 101, 11, 0.7);\n  }\n  section[_ngcontent-%COMP%]   .cube__face[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 400px;\n    height: 400px;\n    background-color: rgba(141, 60, 143, 0.9);\n  }\n  section[_ngcontent-%COMP%]   .cube__face--front[_ngcontent-%COMP%] {\n    transform: rotateY(0deg);\n  }\n  section[_ngcontent-%COMP%]   .cube__face--right[_ngcontent-%COMP%] {\n    transform: rotateY(90deg);\n  }\n  section[_ngcontent-%COMP%]   .cube__face--back[_ngcontent-%COMP%] {\n    transform: rotateY(180deg);\n  }\n  section[_ngcontent-%COMP%]   .cube__face--left[_ngcontent-%COMP%] {\n    transform: rotateY(-90deg);\n  }\n  section[_ngcontent-%COMP%]   .cube__face--top[_ngcontent-%COMP%] {\n    transform: rotateX(90deg);\n  }\n  section[_ngcontent-%COMP%]   .cube__face--bottom[_ngcontent-%COMP%] {\n    transform: rotateX(-90deg);\n  }\n  section[_ngcontent-%COMP%]   .cube__face--front[_ngcontent-%COMP%] {\n    transform: rotateY(0deg) translateZ(200px);\n  }\n  section[_ngcontent-%COMP%]   .cube__face--right[_ngcontent-%COMP%] {\n    transform: rotateY(90deg) translateZ(200px);\n  }\n  section[_ngcontent-%COMP%]   .cube__face--back[_ngcontent-%COMP%] {\n    transform: rotateY(180deg) translateZ(200px);\n  }\n  section[_ngcontent-%COMP%]   .cube__face--left[_ngcontent-%COMP%] {\n    transform: rotateY(-90deg) translateZ(200px);\n  }\n  section[_ngcontent-%COMP%]   .cube__face--top[_ngcontent-%COMP%] {\n    transform: rotateX(90deg) translateZ(200px);\n  }\n  section[_ngcontent-%COMP%]   .cube__face--bottom[_ngcontent-%COMP%] {\n    transform: rotateX(-90deg) translateZ(200px);\n  }\n  section[_ngcontent-%COMP%]   .cube[_ngcontent-%COMP%] {\n    transform: translateZ(-200px);\n  }\n  section[_ngcontent-%COMP%]   .cube[_ngcontent-%COMP%] {\n    transition: transform 1s;\n  }\n}\n@media screen and (min-width: 320px) and (max-width: 600px) {\n  section[_ngcontent-%COMP%] {\n    margin: 5% auto;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n  }\n  section[_ngcontent-%COMP%]   #group_projets[_ngcontent-%COMP%] {\n    width: 40%;\n  }\n  section[_ngcontent-%COMP%]   #nav_project[_ngcontent-%COMP%] {\n    position: absolute;\n    margin: 60% 50%;\n  }\n  section[_ngcontent-%COMP%]   .groupP[_ngcontent-%COMP%] {\n    position: absolute;\n    margin-right: 30%;\n    margin-top: 2rem;\n  }\n  section[_ngcontent-%COMP%]   .groupP[_ngcontent-%COMP%] {\n    width: 40%;\n    position: absolute;\n    margin-right: 30%;\n  }\n  section[_ngcontent-%COMP%]   #page_project[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  section[_ngcontent-%COMP%]   .scene[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 200px;\n    perspective: 600px;\n    margin-top: 10%;\n    background-color: rgba(230, 49, 31, 0.7);\n  }\n  section[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    width: 80%;\n    margin: 0 auto;\n  }\n  section[_ngcontent-%COMP%]   .img_desc[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    margin: 5%;\n  }\n  section[_ngcontent-%COMP%]   .img_desc[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin: 0 auto;\n  }\n  section[_ngcontent-%COMP%]   .border[_ngcontent-%COMP%] {\n    border: solid 1px black;\n  }\n  section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n  }\n  section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    list-style: none;\n    text-align: center;\n    padding: 1rem;\n  }\n  section[_ngcontent-%COMP%]   .cube[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    position: relative;\n    transform-style: preserve-3d;\n    background-color: rgba(231, 101, 11, 0.7);\n  }\n  section[_ngcontent-%COMP%]   .cube__face[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 200px;\n    height: 200px;\n    background-color: rgba(141, 60, 143, 0.9);\n  }\n  section[_ngcontent-%COMP%]   .cube__face--front[_ngcontent-%COMP%] {\n    transform: rotateY(0deg);\n  }\n  section[_ngcontent-%COMP%]   .cube__face--right[_ngcontent-%COMP%] {\n    transform: rotateY(90deg);\n  }\n  section[_ngcontent-%COMP%]   .cube__face--back[_ngcontent-%COMP%] {\n    transform: rotateY(180deg);\n  }\n  section[_ngcontent-%COMP%]   .cube__face--left[_ngcontent-%COMP%] {\n    transform: rotateY(-90deg);\n  }\n  section[_ngcontent-%COMP%]   .cube__face--top[_ngcontent-%COMP%] {\n    transform: rotateX(90deg);\n  }\n  section[_ngcontent-%COMP%]   .cube__face--bottom[_ngcontent-%COMP%] {\n    transform: rotateX(-90deg);\n  }\n  section[_ngcontent-%COMP%]   .cube__face--front[_ngcontent-%COMP%] {\n    transform: rotateY(0deg) translateZ(100px);\n  }\n  section[_ngcontent-%COMP%]   .cube__face--right[_ngcontent-%COMP%] {\n    transform: rotateY(90deg) translateZ(100px);\n  }\n  section[_ngcontent-%COMP%]   .cube__face--back[_ngcontent-%COMP%] {\n    transform: rotateY(180deg) translateZ(100px);\n  }\n  section[_ngcontent-%COMP%]   .cube__face--left[_ngcontent-%COMP%] {\n    transform: rotateY(-90deg) translateZ(100px);\n  }\n  section[_ngcontent-%COMP%]   .cube__face--top[_ngcontent-%COMP%] {\n    transform: rotateX(90deg) translateZ(100px);\n  }\n  section[_ngcontent-%COMP%]   .cube__face--bottom[_ngcontent-%COMP%] {\n    transform: rotateX(-90deg) translateZ(100px);\n  }\n  section[_ngcontent-%COMP%]   .cube[_ngcontent-%COMP%] {\n    transform: translateZ(-100px);\n  }\n  section[_ngcontent-%COMP%]   .cube[_ngcontent-%COMP%] {\n    transition: transform 1s;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2psZy9yZW5kdTIvbmVlZXgvcG9ydGZvbGlvL3NyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsNkJBQUE7RUNDRjtFRENFO0lBQ0UsVUFBQTtFQ0NKO0VERUU7SUFDRSxrQkFBQTtFQ0FKO0VER0U7SUFFRSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZ0JBQUE7RUNGSjtFRGtCRTtJQUNFLFVBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0VDaEJKO0VEcUJFO0lBQ0UsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7RUNuQko7RURxQkk7SUFDRSxhQUFBO0lBQ0EsZ0JBQUE7RUNuQk47RURzQkk7SUFDRSxlQUFBO0VDcEJOO0VEMkJJO0lBQ0UsZUFBQTtFQ3pCTjtFRDhCRTtJQUVFLFlBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7SUFFQSx3Q0FBQTtFQzlCSjtFRG1DRTtJQUNFLFVBQUE7SUFDQSxjQUFBO0VDakNKO0VEb0NFO0lBQ0UsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsOEJBQUE7SUFDQSxVQUFBO0VDbENKO0VEb0NJO0lBQ0UsY0FBQTtFQ2xDTjtFRHdDRTtJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSw0QkFBQTtJQUVBLHlDQUFBO0VDdkNKO0VEMkNFO0lBQ0Usa0JBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUVBLHlDQUFBO0VDMUNKO0VENkNFO0lBQ0Usd0JBQUE7RUMzQ0o7RUQ4Q0U7SUFDRSx5QkFBQTtFQzVDSjtFRCtDRTtJQUNFLDBCQUFBO0VDN0NKO0VEZ0RFO0lBQ0UsMEJBQUE7RUM5Q0o7RURpREU7SUFDRSx5QkFBQTtFQy9DSjtFRGtERTtJQUNFLDBCQUFBO0VDaERKO0VEb0RFO0lBQ0UsMENBQUE7RUNsREo7RURxREU7SUFDRSwyQ0FBQTtFQ25ESjtFRHNERTtJQUNFLDRDQUFBO0VDcERKO0VEdURFO0lBQ0UsNENBQUE7RUNyREo7RUR3REU7SUFDRSwyQ0FBQTtFQ3RESjtFRHlERTtJQUNFLDRDQUFBO0VDdkRKO0VEMkRFO0lBQ0UsNkJBQUE7RUN6REo7RUQ2REU7SUFDRSx3QkFBQTtFQzNESjtBQUNGO0FEZ0VBO0VBRUU7SUFDRSxlQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsNkJBQUE7RUMvREY7RURpRUU7SUFDRSxVQUFBO0VDL0RKO0VEa0VFO0lBQ0Usa0JBQUE7RUNoRUo7RURtRUU7SUFFRSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZ0JBQUE7RUNsRUo7RURrRkU7SUFDRSxVQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtFQ2hGSjtFRHdGSTtJQUNFLGVBQUE7RUN0Rk47RUQyRkU7SUFFRSxZQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0lBRUEsd0NBQUE7RUMzRko7RURnR0U7SUFDRSxVQUFBO0lBQ0EsY0FBQTtFQzlGSjtFRGlHRTtJQUNFLGFBQUE7SUFDQSxtQkFBQTtJQUNBLDhCQUFBO0lBQ0EsVUFBQTtFQy9GSjtFRGlHSTtJQUNFLGNBQUE7RUMvRk47RURxR0U7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0lBQ0EsNEJBQUE7SUFFQSx5Q0FBQTtFQ3BHSjtFRHdHRTtJQUNFLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFFQSx5Q0FBQTtFQ3ZHSjtFRDBHRTtJQUNFLHdCQUFBO0VDeEdKO0VEMkdFO0lBQ0UseUJBQUE7RUN6R0o7RUQ0R0U7SUFDRSwwQkFBQTtFQzFHSjtFRDZHRTtJQUNFLDBCQUFBO0VDM0dKO0VEOEdFO0lBQ0UseUJBQUE7RUM1R0o7RUQrR0U7SUFDRSwwQkFBQTtFQzdHSjtFRGlIRTtJQUNFLDBDQUFBO0VDL0dKO0VEa0hFO0lBQ0UsMkNBQUE7RUNoSEo7RURtSEU7SUFDRSw0Q0FBQTtFQ2pISjtFRG9IRTtJQUNFLDRDQUFBO0VDbEhKO0VEcUhFO0lBQ0UsMkNBQUE7RUNuSEo7RURzSEU7SUFDRSw0Q0FBQTtFQ3BISjtFRHdIRTtJQUNFLDZCQUFBO0VDdEhKO0VEMEhFO0lBQ0Usd0JBQUE7RUN4SEo7QUFDRjtBRDZIQTtFQUVFO0lBQ0UsZUFBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLDZCQUFBO0VDNUhGO0VEOEhFO0lBQ0UsVUFBQTtFQzVISjtFRCtIRTtJQUNFLGtCQUFBO0lBQ0EsZUFBQTtFQzdISjtFRGdJRTtJQUVFLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxnQkFBQTtFQy9ISjtFRCtJRTtJQUNFLFVBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0VDN0lKO0VEcUpJO0lBQ0UsZUFBQTtFQ25KTjtFRHdKRTtJQUVFLFlBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0lBRUEsd0NBQUE7RUN4Sko7RUQ2SkU7SUFDRSxVQUFBO0lBQ0EsY0FBQTtFQzNKSjtFRDhKRTtJQUNFLGFBQUE7SUFDQSxtQkFBQTtJQUNBLDhCQUFBO0lBQ0EsVUFBQTtFQzVKSjtFRDhKSTtJQUNFLGNBQUE7RUM1Sk47RURrS0U7SUFFRSx1QkFBQTtFQ2pLSjtFRG9LRTtJQUNFLGFBQUE7SUFDQSxtQkFBQTtJQUNBLGVBQUE7RUNsS0o7RURtS0k7SUFDRSxnQkFBQTtJQUNBLGtCQUFBO0lBQ0QsYUFBQTtFQ2pLTDtFRHFLRTtJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSw0QkFBQTtJQUVBLHlDQUFBO0VDcEtKO0VEd0tFO0lBQ0Usa0JBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUVBLHlDQUFBO0VDdktKO0VEMEtFO0lBQ0Usd0JBQUE7RUN4S0o7RUQyS0U7SUFDRSx5QkFBQTtFQ3pLSjtFRDRLRTtJQUNFLDBCQUFBO0VDMUtKO0VENktFO0lBQ0UsMEJBQUE7RUMzS0o7RUQ4S0U7SUFDRSx5QkFBQTtFQzVLSjtFRCtLRTtJQUNFLDBCQUFBO0VDN0tKO0VEaUxFO0lBQ0UsMENBQUE7RUMvS0o7RURrTEU7SUFDRSwyQ0FBQTtFQ2hMSjtFRG1MRTtJQUNFLDRDQUFBO0VDakxKO0VEb0xFO0lBQ0UsNENBQUE7RUNsTEo7RURxTEU7SUFDRSwyQ0FBQTtFQ25MSjtFRHNMRTtJQUNFLDRDQUFBO0VDcExKO0VEd0xFO0lBQ0UsNkJBQUE7RUN0TEo7RUQwTEU7SUFDRSx3QkFBQTtFQ3hMSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgc2VjdGlvbiB7XG4gICAgbWFyZ2luOiA1JSBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcblxuICAgICNncm91cF9wcm9qZXRzIHtcbiAgICAgIHdpZHRoOiA0MCU7XG4gICAgfVxuXG4gICAgI25hdl9wcm9qZWN0IHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB9XG5cbiAgICAuZ3JvdXBQIHtcblxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAzMCU7XG4gICAgICBtYXJnaW4tdG9wOiAycmVtO1xuXG4gICAgfVxuXG4gICAgI3Bva2Vtb24ge1xuXG4gICAgfVxuXG4gICAgI3dhaXNhdHVzTW92aWUge1xuXG4gICAgfVxuXG4gICAgI3RvZG9saXN0X3JlYWN0IHtcblxuICAgIH1cblxuICAgIC5ncm91cFAge1xuICAgICAgd2lkdGg6IDQwJTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIG1hcmdpbi1yaWdodDogMzAlO1xuXG5cbiAgICB9XG5cbiAgICB1bHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgbWFyZ2luLWxlZnQ6ICA4MCU7XG5cbiAgICAgIGxpe1xuICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgfVxuXG4gICAgICBsaTpob3ZlcntcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgIH1cblxuICAgICNwYWdlX3Byb2plY3Qge1xuXG5cbiAgICAgIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgLnNjZW5lIHtcblxuICAgICAgd2lkdGg6IDQwMHB4O1xuICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICAgIHBlcnNwZWN0aXZlOiAxMjAwcHg7XG5cbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMwLCA0OSwgMzEsIDAuNyk7XG5cblxuICAgIH1cblxuICAgIC5sb2dvIHtcbiAgICAgIHdpZHRoOiA4MCU7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG5cbiAgICAuaW1nX2Rlc2Mge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBtYXJnaW46IDUlO1xuXG4gICAgICBpbWcge1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcblxuICAgICAgfVxuXG4gICAgfVxuXG4gICAgLmN1YmUge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzMSwgMTAxLCAxMSwgMC43KVxuXG4gICAgfVxuXG4gICAgLmN1YmVfX2ZhY2Uge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDQwMHB4O1xuICAgICAgaGVpZ2h0OiA0MDBweDtcblxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNDEsIDYwLCAxNDMsIDAuOSlcbiAgICB9XG5cbiAgICAuY3ViZV9fZmFjZS0tZnJvbnQge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xuICAgIH1cblxuICAgIC5jdWJlX19mYWNlLS1yaWdodCB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpO1xuICAgIH1cblxuICAgIC5jdWJlX19mYWNlLS1iYWNrIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuICAgIH1cblxuICAgIC5jdWJlX19mYWNlLS1sZWZ0IHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgtOTBkZWcpO1xuICAgIH1cblxuICAgIC5jdWJlX19mYWNlLS10b3Age1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKTtcbiAgICB9XG5cbiAgICAuY3ViZV9fZmFjZS0tYm90dG9tIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgtOTBkZWcpO1xuICAgIH1cblxuXG4gICAgLmN1YmVfX2ZhY2UtLWZyb250IHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKSB0cmFuc2xhdGVaKDIwMHB4KTtcbiAgICB9XG5cbiAgICAuY3ViZV9fZmFjZS0tcmlnaHQge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKDIwMHB4KTtcbiAgICB9XG5cbiAgICAuY3ViZV9fZmFjZS0tYmFjayB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKSB0cmFuc2xhdGVaKDIwMHB4KTtcbiAgICB9XG5cbiAgICAuY3ViZV9fZmFjZS0tbGVmdCB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTkwZGVnKSB0cmFuc2xhdGVaKDIwMHB4KTtcbiAgICB9XG5cbiAgICAuY3ViZV9fZmFjZS0tdG9wIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWCg5MGRlZykgdHJhbnNsYXRlWigyMDBweCk7XG4gICAgfVxuXG4gICAgLmN1YmVfX2ZhY2UtLWJvdHRvbSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTkwZGVnKSB0cmFuc2xhdGVaKDIwMHB4KTtcbiAgICB9XG5cblxuICAgIC5jdWJlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjAwcHgpO1xuICAgIH1cblxuXG4gICAgLmN1YmUge1xuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzO1xuICAgIH1cbiAgfVxuXG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG5cbiAgc2VjdGlvbiB7XG4gICAgbWFyZ2luOiA1JSBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcblxuICAgICNncm91cF9wcm9qZXRzIHtcbiAgICAgIHdpZHRoOiA0MCU7XG4gICAgfVxuXG4gICAgI25hdl9wcm9qZWN0IHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB9XG5cbiAgICAuZ3JvdXBQIHtcblxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAzMCU7XG4gICAgICBtYXJnaW4tdG9wOiAycmVtO1xuXG4gICAgfVxuXG4gICAgI3Bva2Vtb24ge1xuXG4gICAgfVxuXG4gICAgI3dhaXNhdHVzTW92aWUge1xuXG4gICAgfVxuXG4gICAgI3RvZG9saXN0X3JlYWN0IHtcblxuICAgIH1cblxuICAgIC5ncm91cFAge1xuICAgICAgd2lkdGg6IDQwJTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIG1hcmdpbi1yaWdodDogMzAlO1xuXG5cbiAgICB9XG5cbiAgICAjcGFnZV9wcm9qZWN0IHtcblxuXG4gICAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgIH1cblxuICAgIH1cblxuICAgIC5zY2VuZSB7XG5cbiAgICAgIHdpZHRoOiA0MDBweDtcbiAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgICBwZXJzcGVjdGl2ZTogMTIwMHB4O1xuXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzMCwgNDksIDMxLCAwLjcpO1xuXG5cbiAgICB9XG5cbiAgICAubG9nbyB7XG4gICAgICB3aWR0aDogODAlO1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuXG4gICAgLmltZ19kZXNjIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgbWFyZ2luOiA1JTtcblxuICAgICAgaW1nIHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG5cbiAgICAgIH1cblxuICAgIH1cblxuICAgIC5jdWJlIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcblxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzEsIDEwMSwgMTEsIDAuNylcblxuICAgIH1cblxuICAgIC5jdWJlX19mYWNlIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiA0MDBweDtcbiAgICAgIGhlaWdodDogNDAwcHg7XG5cbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQxLCA2MCwgMTQzLCAwLjkpXG4gICAgfVxuXG4gICAgLmN1YmVfX2ZhY2UtLWZyb250IHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcbiAgICB9XG5cbiAgICAuY3ViZV9fZmFjZS0tcmlnaHQge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKTtcbiAgICB9XG5cbiAgICAuY3ViZV9fZmFjZS0tYmFjayB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbiAgICB9XG5cbiAgICAuY3ViZV9fZmFjZS0tbGVmdCB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTkwZGVnKTtcbiAgICB9XG5cbiAgICAuY3ViZV9fZmFjZS0tdG9wIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWCg5MGRlZyk7XG4gICAgfVxuXG4gICAgLmN1YmVfX2ZhY2UtLWJvdHRvbSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTkwZGVnKTtcbiAgICB9XG5cblxuICAgIC5jdWJlX19mYWNlLS1mcm9udCB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZykgdHJhbnNsYXRlWigyMDBweCk7XG4gICAgfVxuXG4gICAgLmN1YmVfX2ZhY2UtLXJpZ2h0IHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWSg5MGRlZykgdHJhbnNsYXRlWigyMDBweCk7XG4gICAgfVxuXG4gICAgLmN1YmVfX2ZhY2UtLWJhY2sge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZykgdHJhbnNsYXRlWigyMDBweCk7XG4gICAgfVxuXG4gICAgLmN1YmVfX2ZhY2UtLWxlZnQge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKC05MGRlZykgdHJhbnNsYXRlWigyMDBweCk7XG4gICAgfVxuXG4gICAgLmN1YmVfX2ZhY2UtLXRvcCB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHRyYW5zbGF0ZVooMjAwcHgpO1xuICAgIH1cblxuICAgIC5jdWJlX19mYWNlLS1ib3R0b20ge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKC05MGRlZykgdHJhbnNsYXRlWigyMDBweCk7XG4gICAgfVxuXG5cbiAgICAuY3ViZSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTIwMHB4KTtcbiAgICB9XG5cblxuICAgIC5jdWJlIHtcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcztcbiAgICB9XG4gIH1cblxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG5cbiAgc2VjdGlvbiB7XG4gICAgbWFyZ2luOiA1JSBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcblxuICAgICNncm91cF9wcm9qZXRzIHtcbiAgICAgIHdpZHRoOiA0MCU7XG4gICAgfVxuXG4gICAgI25hdl9wcm9qZWN0IHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIG1hcmdpbjogNjAlIDUwJTtcbiAgICB9XG5cbiAgICAuZ3JvdXBQIHtcblxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAzMCU7XG4gICAgICBtYXJnaW4tdG9wOiAycmVtO1xuXG4gICAgfVxuXG4gICAgI3Bva2Vtb24ge1xuXG4gICAgfVxuXG4gICAgI3dhaXNhdHVzTW92aWUge1xuXG4gICAgfVxuXG4gICAgI3RvZG9saXN0X3JlYWN0IHtcblxuICAgIH1cblxuICAgIC5ncm91cFAge1xuICAgICAgd2lkdGg6IDQwJTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIG1hcmdpbi1yaWdodDogMzAlO1xuXG5cbiAgICB9XG5cbiAgICAjcGFnZV9wcm9qZWN0IHtcblxuXG4gICAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgIH1cblxuICAgIH1cblxuICAgIC5zY2VuZSB7XG5cbiAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICBwZXJzcGVjdGl2ZTogNjAwcHg7XG4gICAgICBtYXJnaW4tdG9wOiAxMCU7XG5cbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMwLCA0OSwgMzEsIDAuNyk7XG5cblxuICAgIH1cblxuICAgIC5sb2dvIHtcbiAgICAgIHdpZHRoOiA4MCU7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG5cbiAgICAuaW1nX2Rlc2Mge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBtYXJnaW46IDUlO1xuXG4gICAgICBpbWcge1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcblxuICAgICAgfVxuXG4gICAgfVxuXG4gICAgLmJvcmRlcntcblxuICAgICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XG4gICAgfVxuXG4gICAgdWx7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIGxpe1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY3ViZSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG5cbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMxLCAxMDEsIDExLCAwLjcpXG5cbiAgICB9XG5cbiAgICAuY3ViZV9fZmFjZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogMjAwcHg7XG4gICAgICBoZWlnaHQ6IDIwMHB4O1xuXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0MSwgNjAsIDE0MywgMC45KVxuICAgIH1cblxuICAgIC5jdWJlX19mYWNlLS1mcm9udCB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XG4gICAgfVxuXG4gICAgLmN1YmVfX2ZhY2UtLXJpZ2h0IHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWSg5MGRlZyk7XG4gICAgfVxuXG4gICAgLmN1YmVfX2ZhY2UtLWJhY2sge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG4gICAgfVxuXG4gICAgLmN1YmVfX2ZhY2UtLWxlZnQge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKC05MGRlZyk7XG4gICAgfVxuXG4gICAgLmN1YmVfX2ZhY2UtLXRvcCB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpO1xuICAgIH1cblxuICAgIC5jdWJlX19mYWNlLS1ib3R0b20ge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKC05MGRlZyk7XG4gICAgfVxuXG5cbiAgICAuY3ViZV9fZmFjZS0tZnJvbnQge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpIHRyYW5zbGF0ZVooMTAwcHgpO1xuICAgIH1cblxuICAgIC5jdWJlX19mYWNlLS1yaWdodCB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpIHRyYW5zbGF0ZVooMTAwcHgpO1xuICAgIH1cblxuICAgIC5jdWJlX19mYWNlLS1iYWNrIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpIHRyYW5zbGF0ZVooMTAwcHgpO1xuICAgIH1cblxuICAgIC5jdWJlX19mYWNlLS1sZWZ0IHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgtOTBkZWcpIHRyYW5zbGF0ZVooMTAwcHgpO1xuICAgIH1cblxuICAgIC5jdWJlX19mYWNlLS10b3Age1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSB0cmFuc2xhdGVaKDEwMHB4KTtcbiAgICB9XG5cbiAgICAuY3ViZV9fZmFjZS0tYm90dG9tIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgtOTBkZWcpIHRyYW5zbGF0ZVooMTAwcHgpO1xuICAgIH1cblxuXG4gICAgLmN1YmUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0xMDBweCk7XG4gICAgfVxuXG5cbiAgICAuY3ViZSB7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XG4gICAgfVxuICB9XG5cblxufVxuIiwiQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gIHNlY3Rpb24ge1xuICAgIG1hcmdpbjogNSUgYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIH1cbiAgc2VjdGlvbiAjZ3JvdXBfcHJvamV0cyB7XG4gICAgd2lkdGg6IDQwJTtcbiAgfVxuICBzZWN0aW9uICNuYXZfcHJvamVjdCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG4gIHNlY3Rpb24gLmdyb3VwUCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbi1yaWdodDogMzAlO1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gIH1cbiAgc2VjdGlvbiAuZ3JvdXBQIHtcbiAgICB3aWR0aDogNDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDMwJTtcbiAgfVxuICBzZWN0aW9uIHVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgbWFyZ2luLWxlZnQ6IDgwJTtcbiAgfVxuICBzZWN0aW9uIHVsIGxpIHtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIH1cbiAgc2VjdGlvbiB1bCBsaTpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIHNlY3Rpb24gI3BhZ2VfcHJvamVjdCBoMSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG4gIHNlY3Rpb24gLnNjZW5lIHtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICBwZXJzcGVjdGl2ZTogMTIwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMwLCA0OSwgMzEsIDAuNyk7XG4gIH1cbiAgc2VjdGlvbiAubG9nbyB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuICBzZWN0aW9uIC5pbWdfZGVzYyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW46IDUlO1xuICB9XG4gIHNlY3Rpb24gLmltZ19kZXNjIGltZyB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbiAgc2VjdGlvbiAuY3ViZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMxLCAxMDEsIDExLCAwLjcpO1xuICB9XG4gIHNlY3Rpb24gLmN1YmVfX2ZhY2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0MSwgNjAsIDE0MywgMC45KTtcbiAgfVxuICBzZWN0aW9uIC5jdWJlX19mYWNlLS1mcm9udCB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xuICB9XG4gIHNlY3Rpb24gLmN1YmVfX2ZhY2UtLXJpZ2h0IHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpO1xuICB9XG4gIHNlY3Rpb24gLmN1YmVfX2ZhY2UtLWJhY2sge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuICB9XG4gIHNlY3Rpb24gLmN1YmVfX2ZhY2UtLWxlZnQge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgtOTBkZWcpO1xuICB9XG4gIHNlY3Rpb24gLmN1YmVfX2ZhY2UtLXRvcCB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKTtcbiAgfVxuICBzZWN0aW9uIC5jdWJlX19mYWNlLS1ib3R0b20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCgtOTBkZWcpO1xuICB9XG4gIHNlY3Rpb24gLmN1YmVfX2ZhY2UtLWZyb250IHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZykgdHJhbnNsYXRlWigyMDBweCk7XG4gIH1cbiAgc2VjdGlvbiAuY3ViZV9fZmFjZS0tcmlnaHQge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSg5MGRlZykgdHJhbnNsYXRlWigyMDBweCk7XG4gIH1cbiAgc2VjdGlvbiAuY3ViZV9fZmFjZS0tYmFjayB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZykgdHJhbnNsYXRlWigyMDBweCk7XG4gIH1cbiAgc2VjdGlvbiAuY3ViZV9fZmFjZS0tbGVmdCB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKC05MGRlZykgdHJhbnNsYXRlWigyMDBweCk7XG4gIH1cbiAgc2VjdGlvbiAuY3ViZV9fZmFjZS0tdG9wIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHRyYW5zbGF0ZVooMjAwcHgpO1xuICB9XG4gIHNlY3Rpb24gLmN1YmVfX2ZhY2UtLWJvdHRvbSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKC05MGRlZykgdHJhbnNsYXRlWigyMDBweCk7XG4gIH1cbiAgc2VjdGlvbiAuY3ViZSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0yMDBweCk7XG4gIH1cbiAgc2VjdGlvbiAuY3ViZSB7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICBzZWN0aW9uIHtcbiAgICBtYXJnaW46IDUlIGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICB9XG4gIHNlY3Rpb24gI2dyb3VwX3Byb2pldHMge1xuICAgIHdpZHRoOiA0MCU7XG4gIH1cbiAgc2VjdGlvbiAjbmF2X3Byb2plY3Qge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuICBzZWN0aW9uIC5ncm91cFAge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDMwJTtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xuICB9XG4gIHNlY3Rpb24gLmdyb3VwUCB7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMCU7XG4gIH1cbiAgc2VjdGlvbiAjcGFnZV9wcm9qZWN0IGgxIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cbiAgc2VjdGlvbiAuc2NlbmUge1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIHBlcnNwZWN0aXZlOiAxMjAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzAsIDQ5LCAzMSwgMC43KTtcbiAgfVxuICBzZWN0aW9uIC5sb2dvIHtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG4gIHNlY3Rpb24gLmltZ19kZXNjIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbjogNSU7XG4gIH1cbiAgc2VjdGlvbiAuaW1nX2Rlc2MgaW1nIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuICBzZWN0aW9uIC5jdWJlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzEsIDEwMSwgMTEsIDAuNyk7XG4gIH1cbiAgc2VjdGlvbiAuY3ViZV9fZmFjZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQxLCA2MCwgMTQzLCAwLjkpO1xuICB9XG4gIHNlY3Rpb24gLmN1YmVfX2ZhY2UtLWZyb250IHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XG4gIH1cbiAgc2VjdGlvbiAuY3ViZV9fZmFjZS0tcmlnaHQge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSg5MGRlZyk7XG4gIH1cbiAgc2VjdGlvbiAuY3ViZV9fZmFjZS0tYmFjayB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG4gIH1cbiAgc2VjdGlvbiAuY3ViZV9fZmFjZS0tbGVmdCB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKC05MGRlZyk7XG4gIH1cbiAgc2VjdGlvbiAuY3ViZV9fZmFjZS0tdG9wIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpO1xuICB9XG4gIHNlY3Rpb24gLmN1YmVfX2ZhY2UtLWJvdHRvbSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKC05MGRlZyk7XG4gIH1cbiAgc2VjdGlvbiAuY3ViZV9fZmFjZS0tZnJvbnQge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKSB0cmFuc2xhdGVaKDIwMHB4KTtcbiAgfVxuICBzZWN0aW9uIC5jdWJlX19mYWNlLS1yaWdodCB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKDIwMHB4KTtcbiAgfVxuICBzZWN0aW9uIC5jdWJlX19mYWNlLS1iYWNrIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKSB0cmFuc2xhdGVaKDIwMHB4KTtcbiAgfVxuICBzZWN0aW9uIC5jdWJlX19mYWNlLS1sZWZ0IHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTkwZGVnKSB0cmFuc2xhdGVaKDIwMHB4KTtcbiAgfVxuICBzZWN0aW9uIC5jdWJlX19mYWNlLS10b3Age1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCg5MGRlZykgdHJhbnNsYXRlWigyMDBweCk7XG4gIH1cbiAgc2VjdGlvbiAuY3ViZV9fZmFjZS0tYm90dG9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTkwZGVnKSB0cmFuc2xhdGVaKDIwMHB4KTtcbiAgfVxuICBzZWN0aW9uIC5jdWJlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTIwMHB4KTtcbiAgfVxuICBzZWN0aW9uIC5jdWJlIHtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgc2VjdGlvbiB7XG4gICAgbWFyZ2luOiA1JSBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgfVxuICBzZWN0aW9uICNncm91cF9wcm9qZXRzIHtcbiAgICB3aWR0aDogNDAlO1xuICB9XG4gIHNlY3Rpb24gI25hdl9wcm9qZWN0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luOiA2MCUgNTAlO1xuICB9XG4gIHNlY3Rpb24gLmdyb3VwUCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbi1yaWdodDogMzAlO1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gIH1cbiAgc2VjdGlvbiAuZ3JvdXBQIHtcbiAgICB3aWR0aDogNDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDMwJTtcbiAgfVxuICBzZWN0aW9uICNwYWdlX3Byb2plY3QgaDEge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxuICBzZWN0aW9uIC5zY2VuZSB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgcGVyc3BlY3RpdmU6IDYwMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzMCwgNDksIDMxLCAwLjcpO1xuICB9XG4gIHNlY3Rpb24gLmxvZ28ge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbiAgc2VjdGlvbiAuaW1nX2Rlc2Mge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luOiA1JTtcbiAgfVxuICBzZWN0aW9uIC5pbWdfZGVzYyBpbWcge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG4gIHNlY3Rpb24gLmJvcmRlciB7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XG4gIH1cbiAgc2VjdGlvbiB1bCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgfVxuICBzZWN0aW9uIHVsIGxpIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICB9XG4gIHNlY3Rpb24gLmN1YmUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzMSwgMTAxLCAxMSwgMC43KTtcbiAgfVxuICBzZWN0aW9uIC5jdWJlX19mYWNlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNDEsIDYwLCAxNDMsIDAuOSk7XG4gIH1cbiAgc2VjdGlvbiAuY3ViZV9fZmFjZS0tZnJvbnQge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcbiAgfVxuICBzZWN0aW9uIC5jdWJlX19mYWNlLS1yaWdodCB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKTtcbiAgfVxuICBzZWN0aW9uIC5jdWJlX19mYWNlLS1iYWNrIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbiAgfVxuICBzZWN0aW9uIC5jdWJlX19mYWNlLS1sZWZ0IHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTkwZGVnKTtcbiAgfVxuICBzZWN0aW9uIC5jdWJlX19mYWNlLS10b3Age1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCg5MGRlZyk7XG4gIH1cbiAgc2VjdGlvbiAuY3ViZV9fZmFjZS0tYm90dG9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTkwZGVnKTtcbiAgfVxuICBzZWN0aW9uIC5jdWJlX19mYWNlLS1mcm9udCB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpIHRyYW5zbGF0ZVooMTAwcHgpO1xuICB9XG4gIHNlY3Rpb24gLmN1YmVfX2ZhY2UtLXJpZ2h0IHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpIHRyYW5zbGF0ZVooMTAwcHgpO1xuICB9XG4gIHNlY3Rpb24gLmN1YmVfX2ZhY2UtLWJhY2sge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpIHRyYW5zbGF0ZVooMTAwcHgpO1xuICB9XG4gIHNlY3Rpb24gLmN1YmVfX2ZhY2UtLWxlZnQge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgtOTBkZWcpIHRyYW5zbGF0ZVooMTAwcHgpO1xuICB9XG4gIHNlY3Rpb24gLmN1YmVfX2ZhY2UtLXRvcCB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSB0cmFuc2xhdGVaKDEwMHB4KTtcbiAgfVxuICBzZWN0aW9uIC5jdWJlX19mYWNlLS1ib3R0b20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCgtOTBkZWcpIHRyYW5zbGF0ZVooMTAwcHgpO1xuICB9XG4gIHNlY3Rpb24gLmN1YmUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMTAwcHgpO1xuICB9XG4gIHNlY3Rpb24gLmN1YmUge1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcztcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-projects',
                templateUrl: './projects.component.html',
                styleUrls: ['./projects.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/services.component.ts":
/*!************************************************!*\
  !*** ./src/app/services/services.component.ts ***!
  \************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");



class ServicesComponent {
    constructor() {
        this.marketingBoolean = false;
        this.designBoolean = false;
        this.codingBoolean = false;
    }
    ngAfterViewInit() {
        this.enterViewPort();
    }
    enterViewPort() {
        if (this.marketingBoolean === false || this.designBoolean === false || this.codingBoolean === false) {
            gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].registerPlugin(ScrollTrigger);
            let tl = gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].timeline({
                // yes, we can add it to an entire timeline!
                scrollTrigger: {
                    trigger: "#services",
                    toggleActions: "restart none none none",
                }
            });
            tl.fromTo('.scene', { opacity: 0, duration: 2.1, stagger: 0.7 }, { opacity: 1, duration: 2.1, stagger: 0.7 });
        }
    }
    backStep() {
        this.tl.reverse();
        this.marketingBoolean = false;
        this.designBoolean = false;
        this.codingBoolean = false;
    }
    onClickRed() {
        if (this.marketingBoolean === false) {
            this.tl = gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].timeline();
            this.tl.to('#global_services', { ease: "slow(2, 5)", marginLeft: '50px' })
                .to('#coding', { opacity: 0, duration: 0.4 })
                .to('#design', { opacity: 0, duration: 0.4 })
                .to('#marketing', { display: 'flex', flexDirection: 'row', justifyContent: 'space-between' })
                .to('#title_marketing', { opacity: 0, duration: 1 })
                .to('.cube', { duration: 0.5, rotationY: 360, ease: " slow( 0.3, 0.5, false)" })
                .to('.cube h4', { display: 'block' }, '=-50')
                .to('#description_marketing', { display: 'block', duration: 0.6 })
                .to('#title_marketing_desc', { fontSize: '2rem', duration: 0.4 });
            this.marketingBoolean = true;
        }
        else {
            this.backStep();
        }
    }
    onClickOrange() {
        if (this.designBoolean === false) {
            this.tl = gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].timeline();
            this.tl.to('#global_services', { justifyContent: 'left', ease: "slow(2, 5)", marginLeft: '50px', delay: 1 })
                .to('#coding', { opacity: 0, duration: 0.5 }, '-=1')
                .to('#marketing', { opacity: 0, duration: 0.5 }, '-=1')
                .to('#design', { display: 'flex', flexDirection: 'row', justifyContent: 'space-between' })
                .to('#title_design', { opacity: 0, duration: 0.5 })
                .to('.cube', { duration: 0.5, rotationY: 360, ease: " slow( 0.3, 0.5, false)" })
                .to('#description_design', { display: 'inline' })
                .to('#title_design_desc', { fontSize: '2rem', duration: 1 });
            this.designBoolean = true;
        }
        else {
            this.backStep();
        }
    }
    onClickPurple() {
        if (this.codingBoolean === false) {
            this.tl = gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].timeline();
            this.tl.to('#global_services', { justifyContent: 'left', ease: "slow(2, 10)", marginLeft: '50px', delay: 1 })
                .to('#design', { opacity: 0, duration: 0.5 }, '-=1')
                .to('#marketing', { opacity: 0, duration: 0.5 }, '-=1')
                .to('#coding', { display: 'flex', flexDirection: 'row', justifyContent: 'space-between' })
                .to('#title_coding', { opacity: 0, duration: 0.5 })
                .to('.cube', { duration: 0.5, rotationY: 360, ease: " slow( 0.3, 0.5, false)" })
                .to('#description_coding', { display: 'inline' })
                .to('#title_coding_desc', { fontSize: '2rem', duration: 1 });
            this.codingBoolean = true;
        }
        else {
            this.backStep();
        }
    }
}
ServicesComponent.ɵfac = function ServicesComponent_Factory(t) { return new (t || ServicesComponent)(); };
ServicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServicesComponent, selectors: [["app-services"]], decls: 117, vars: 0, consts: [[1, "filet"], ["id", "services"], ["id", "global_services"], ["id", "marketing", 1, "width_container_services"], ["id", "cube-red"], [1, "scene", 3, "click"], [1, "cube"], [1, "cube__face", "cube__face--front", "red"], [1, "cube__face", "cube__face--back", "red"], [1, "cube__face", "cube__face--right", "red"], [1, "cube__face", "cube__face--left", "red"], [1, "cube__face", "cube__face--top", "red"], [1, "cube__face", "cube__face--bottom", "red"], ["id", "title_marketing"], ["id", "description_marketing"], ["id", "title_marketing_desc"], [1, "list_service"], ["id", "design", 1, "width_container_services"], ["id", "cube-orange"], [1, "cube__face", "cube__face--front", "orange"], [1, "cube__face", "cube__face--back", "orange"], [1, "cube__face", "cube__face--right", "orange"], [1, "cube__face", "cube__face--left", "orange"], [1, "cube__face", "cube__face--top", "orange"], [1, "cube__face", "cube__face--bottom", "orange"], ["id", "title_design"], ["id", "description_design"], ["id", "title_design_desc"], ["id", "coding", 1, "width_container_services"], ["id", "cube-purple"], [1, "cube__face", "cube__face--front", "purple"], [1, "cube__face", "cube__face--back", "purple"], [1, "cube__face", "cube__face--right", "purple"], [1, "cube__face", "cube__face--left", "purple"], [1, "cube__face", "cube__face--top", "purple"], [1, "cube__face", "cube__face--bottom", "purple"], ["id", "title_coding"], ["id", "description_coding"], ["id", "title_coding_desc"]], template: function ServicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Nos Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "article", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServicesComponent_Template_div_click_7_listener() { return ctx.onClickRed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Digital");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "SEO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Etude");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Money");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "top");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "bottom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Marketing Digital");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "article", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h2", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Marketing Digital");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Un site internet est une passerelle, un lien entre l\u2019utilisateur et le cr\u00E9ateur. Si le pont est solide et harmonieux, il permet \u00E0 l\u2019un d\u2019acc\u00E9der \u00E0 une v\u00E9ritable exp\u00E9rience virtuelle, \u00E0 l\u2019autre de mettre en valeur son offre. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ul", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Gagner en visibilit\u00E9 sur les moteurs de recherche");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Attirer de nouveaux clients & prospects sur la plateforme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Pr\u00E9senter son offre de fa\u00E7on claire & optimis\u00E9e");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Cr\u00E9er des bases de donn\u00E9es client");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Obtenir de nouveaux outils pour communiquer efficacement ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "L\u2019interactivit\u00E9 est une notion primordiale, car elle donne du sens \u00E0 l\u2019ensemble. L\u2019envie d\u2019\u00E9changer non seulement votre proposition de valeur contre une r\u00E9mun\u00E9ration, mais aussi et surtout votre vision et vos valeurs avec les personnes qui permettent \u00E0 votre activit\u00E9 de tourner est l\u2019enjeux majeur de notre \u00E8re.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "section", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "article", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServicesComponent_Template_div_click_47_listener() { return ctx.onClickOrange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "front");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "top");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "bottom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h2", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "article", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h2", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Une \u0153uvre d\u2019art est une cr\u00E9ation dans laquelle l\u2019artiste a int\u00E9gr\u00E9 sa vision pour cr\u00E9er chez celui qui la contemple des \u00E9motions. Si l\u2019\u0153uvre d\u2019art est suffisamment compr\u00E9hensible par un n\u00E9ophyte et attirante pour un \u0153il expert alors on peut dire que l\u2019\u0153uvre est r\u00E9ussite.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "ul", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "D\u00E9finir ensemble les codes couleur du secteur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Num\u00E9riser votre image de marque");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Exprimer les \u00E9motions li\u00E9es \u00E0 vos produits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Retenir l\u2019attention de vos utilisateurs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Donner l\u2019envie \u00E0 vos clients de montrer vos cr\u00E9ations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "L\u2019art n\u2019est pas une comp\u00E9tition mais l\u2019expression de la sensibilit\u00E9 de chacun. Si votre art plait, c\u2019est que votre technique a \u00E9t\u00E9 correctement mise au service de votre message.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "section", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "article", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServicesComponent_Template_div_click_83_listener() { return ctx.onClickPurple(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "front");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "top");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "bottom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "h2", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Coding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "article", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "h2", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Coding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "L\u2019art du codage est autant un travail d\u2019architecte que de traducteur. Il permet de poser des bases qui se veulent solides pour accueillir au moyen de divers langages le contenu imagin\u00E9 par son cr\u00E9ateur. Une fonctionnalit\u00E9 n\u2019est ni plus ni moins qu\u2019un souhait traduit dans un langage informatique.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "ul", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "\u00C9tablir ensemble un cahier des charges coh\u00E9rent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Trier les fonctionnalit\u00E9s en fonction des besoins r\u00E9els");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "D\u00E9finir une premi\u00E8re maquette");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "V\u00E9rifier que l\u2019exp\u00E9rience utilisateur propos\u00E9e est efficiente ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "B\u00E2tir une plateforme fiable, p\u00E9renne et s\u00E9curis\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Il y a mille et une fa\u00E7ons d\u2019arriver \u00E0 un r\u00E9sultat, pour autant le chemin le plus optimis\u00E9 est rarement le plus pragmatique. Savoir discerner le r\u00E9sultat voulu du besoin r\u00E9el, voil\u00E0 le v\u00E9ritable talent d\u2019un informaticien.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@media screen and (min-width: 1024px) {\n  #services[_ngcontent-%COMP%] {\n    padding: 2% 2%;\n  }\n\n  #global_services[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    padding: 0% 20% 20% 0%;\n    overflow: hidden;\n  }\n\n  h1[_ngcontent-%COMP%] {\n    margin-left: 5%;\n    font-size: 3rem;\n    padding: 2%;\n  }\n\n  h2[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    padding-top: 5%;\n    font-family: \"Quicksand\", sans-serif;\n    font-size: 1rem;\n    text-transform: uppercase;\n  }\n\n  #title_coding[_ngcontent-%COMP%] {\n    color: orange;\n  }\n\n  #title_design[_ngcontent-%COMP%] {\n    color: red;\n  }\n\n  #title_marketing[_ngcontent-%COMP%] {\n    color: purple;\n  }\n\n  .filet[_ngcontent-%COMP%] {\n    height: 15px;\n    width: 70%;\n    border-bottom: solid 5px black;\n    margin-left: 20%;\n    padding: 5%;\n    overflow: hidden;\n  }\n\n  .scene[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 200px;\n    perspective: 600px;\n    box-shadow: 12px 12px 2px 1px rgba(0, 0, 0, 0.2);\n    background-color: orange;\n  }\n\n  .cube[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    position: relative;\n    transform-style: preserve-3d;\n  }\n  .cube[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    margin: auto auto;\n    color: white;\n    display: none;\n    font-family: \"Quicksand\", sans-serif;\n    font-size: 2em;\n    text-transform: uppercase;\n  }\n\n  .cube__face[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 200px;\n    height: 200px;\n  }\n\n  .cube__face--front[_ngcontent-%COMP%] {\n    transform: rotateY(0deg);\n  }\n\n  .cube__face--right[_ngcontent-%COMP%] {\n    transform: rotateY(90deg);\n  }\n\n  .cube__face--back[_ngcontent-%COMP%] {\n    transform: rotateY(180deg);\n  }\n\n  .cube__face--left[_ngcontent-%COMP%] {\n    transform: rotateY(-90deg);\n  }\n\n  .cube__face--top[_ngcontent-%COMP%] {\n    transform: rotateX(90deg);\n  }\n\n  .cube__face--bottom[_ngcontent-%COMP%] {\n    transform: rotateX(-90deg);\n  }\n\n  .cube__face--front[_ngcontent-%COMP%] {\n    transform: rotateY(0deg) translateZ(100px);\n  }\n\n  .cube__face--right[_ngcontent-%COMP%] {\n    transform: rotateY(90deg) translateZ(100px);\n  }\n\n  .cube__face--back[_ngcontent-%COMP%] {\n    transform: rotateY(180deg) translateZ(100px);\n  }\n\n  .cube__face--left[_ngcontent-%COMP%] {\n    transform: rotateY(-90deg) translateZ(100px);\n  }\n\n  .cube__face--top[_ngcontent-%COMP%] {\n    transform: rotateX(90deg) translateZ(100px);\n  }\n\n  .cube__face--bottom[_ngcontent-%COMP%] {\n    transform: rotateX(-90deg) translateZ(100px);\n  }\n\n  .cube[_ngcontent-%COMP%] {\n    transform: translateZ(-100px);\n  }\n\n  p[_ngcontent-%COMP%], li[_ngcontent-%COMP%] {\n    font-family: \"Quicksand\", sans-serif;\n    font-size: 1.2rem;\n  }\n\n  .red[_ngcontent-%COMP%] {\n    background-color: red;\n  }\n\n  .orange[_ngcontent-%COMP%] {\n    background-color: orange;\n  }\n\n  .purple[_ngcontent-%COMP%] {\n    background-color: purple;\n  }\n\n  #description_marketing[_ngcontent-%COMP%] {\n    display: none;\n    width: 60%;\n  }\n  #description_marketing[_ngcontent-%COMP%]   #title_marketing[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  #design[_ngcontent-%COMP%]   #description_design[_ngcontent-%COMP%] {\n    display: none;\n    width: 60%;\n  }\n\n  #coding[_ngcontent-%COMP%]   #description_coding[_ngcontent-%COMP%] {\n    display: none;\n    width: 60%;\n  }\n}\n@media screen and (min-width: 600px) and (max-width: 1024px) {\n  #services[_ngcontent-%COMP%] {\n    padding: 2% 2%;\n  }\n\n  #global_services[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    padding: 0% 20% 20% 0%;\n    overflow: hidden;\n  }\n\n  h1[_ngcontent-%COMP%] {\n    margin-left: 5%;\n    font-size: 3rem;\n    padding: 2%;\n  }\n\n  h2[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    padding-top: 5%;\n    font-family: \"Quicksand\", sans-serif;\n    font-size: 1rem;\n    text-transform: uppercase;\n  }\n\n  #title_coding[_ngcontent-%COMP%] {\n    color: orange;\n  }\n\n  #title_design[_ngcontent-%COMP%] {\n    color: red;\n  }\n\n  #title_marketing[_ngcontent-%COMP%] {\n    color: purple;\n  }\n\n  .filet[_ngcontent-%COMP%] {\n    height: 15px;\n    width: 70%;\n    border-bottom: solid 5px black;\n    margin-left: 20%;\n    padding: 5%;\n    overflow: hidden;\n  }\n\n  .scene[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 200px;\n    perspective: 600px;\n    box-shadow: 12px 12px 2px 1px rgba(0, 0, 0, 0.2);\n    background-color: orange;\n  }\n\n  .cube[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    position: relative;\n    transform-style: preserve-3d;\n  }\n  .cube[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    margin: auto auto;\n    color: white;\n    display: none;\n    font-family: \"Quicksand\", sans-serif;\n    font-size: 2em;\n    text-transform: uppercase;\n  }\n\n  .cube__face[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 200px;\n    height: 200px;\n  }\n\n  .cube__face--front[_ngcontent-%COMP%] {\n    transform: rotateY(0deg);\n  }\n\n  .cube__face--right[_ngcontent-%COMP%] {\n    transform: rotateY(90deg);\n  }\n\n  .cube__face--back[_ngcontent-%COMP%] {\n    transform: rotateY(180deg);\n  }\n\n  .cube__face--left[_ngcontent-%COMP%] {\n    transform: rotateY(-90deg);\n  }\n\n  .cube__face--top[_ngcontent-%COMP%] {\n    transform: rotateX(90deg);\n  }\n\n  .cube__face--bottom[_ngcontent-%COMP%] {\n    transform: rotateX(-90deg);\n  }\n\n  .cube__face--front[_ngcontent-%COMP%] {\n    transform: rotateY(0deg) translateZ(100px);\n  }\n\n  .cube__face--right[_ngcontent-%COMP%] {\n    transform: rotateY(90deg) translateZ(100px);\n  }\n\n  .cube__face--back[_ngcontent-%COMP%] {\n    transform: rotateY(180deg) translateZ(100px);\n  }\n\n  .cube__face--left[_ngcontent-%COMP%] {\n    transform: rotateY(-90deg) translateZ(100px);\n  }\n\n  .cube__face--top[_ngcontent-%COMP%] {\n    transform: rotateX(90deg) translateZ(100px);\n  }\n\n  .cube__face--bottom[_ngcontent-%COMP%] {\n    transform: rotateX(-90deg) translateZ(100px);\n  }\n\n  .cube[_ngcontent-%COMP%] {\n    transform: translateZ(-100px);\n  }\n\n  p[_ngcontent-%COMP%], li[_ngcontent-%COMP%] {\n    font-family: \"Quicksand\", sans-serif;\n    font-size: 1.2rem;\n  }\n\n  .red[_ngcontent-%COMP%] {\n    background-color: red;\n  }\n\n  .orange[_ngcontent-%COMP%] {\n    background-color: orange;\n  }\n\n  .purple[_ngcontent-%COMP%] {\n    background-color: purple;\n  }\n\n  #description_marketing[_ngcontent-%COMP%] {\n    display: none;\n    width: 60%;\n  }\n  #description_marketing[_ngcontent-%COMP%]   #title_marketing[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  #design[_ngcontent-%COMP%]   #description_design[_ngcontent-%COMP%] {\n    display: none;\n    width: 60%;\n  }\n\n  #coding[_ngcontent-%COMP%]   #description_coding[_ngcontent-%COMP%] {\n    display: none;\n    width: 60%;\n  }\n}\n@media screen and (min-width: 320px) and (max-width: 600px) {\n  #services[_ngcontent-%COMP%] {\n    padding: 2% 2%;\n  }\n\n  #global_services[_ngcontent-%COMP%] {\n    padding: 0% 20% 20% 0%;\n    overflow: hidden;\n  }\n\n  h1[_ngcontent-%COMP%] {\n    margin-left: 5%;\n    font-size: 2rem;\n    padding: 2%;\n  }\n\n  h2[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    padding-top: 5%;\n    font-family: \"Quicksand\", sans-serif;\n    font-size: 0.8rem;\n    text-transform: uppercase;\n  }\n\n  #title_coding[_ngcontent-%COMP%] {\n    color: orange;\n  }\n\n  #title_design[_ngcontent-%COMP%] {\n    color: red;\n  }\n\n  #title_marketing[_ngcontent-%COMP%] {\n    color: purple;\n  }\n\n  .filet[_ngcontent-%COMP%] {\n    height: 15px;\n    width: 70%;\n    border-bottom: solid 5px black;\n    margin-left: 20%;\n    padding: 5%;\n    overflow: hidden;\n  }\n\n  .scene[_ngcontent-%COMP%] {\n    width: 100px;\n    height: 100px;\n    perspective: 300px;\n    box-shadow: 12px 12px 2px 1px rgba(0, 0, 0, 0.2);\n    background-color: orange;\n  }\n\n  .cube[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    position: relative;\n    transform-style: preserve-3d;\n  }\n  .cube[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    margin: auto auto;\n    color: white;\n    display: none;\n    font-family: \"Quicksand\", sans-serif;\n    font-size: 2em;\n    text-transform: uppercase;\n  }\n\n  .cube__face[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 100px;\n    height: 100px;\n  }\n\n  .cube__face--front[_ngcontent-%COMP%] {\n    transform: rotateY(0deg);\n  }\n\n  .cube__face--right[_ngcontent-%COMP%] {\n    transform: rotateY(90deg);\n  }\n\n  .cube__face--back[_ngcontent-%COMP%] {\n    transform: rotateY(180deg);\n  }\n\n  .cube__face--left[_ngcontent-%COMP%] {\n    transform: rotateY(-90deg);\n  }\n\n  .cube__face--top[_ngcontent-%COMP%] {\n    transform: rotateX(90deg);\n  }\n\n  .cube__face--bottom[_ngcontent-%COMP%] {\n    transform: rotateX(-90deg);\n  }\n\n  .cube__face--front[_ngcontent-%COMP%] {\n    transform: rotateY(0deg) translateZ(50px);\n  }\n\n  .cube__face--right[_ngcontent-%COMP%] {\n    transform: rotateY(90deg) translateZ(50px);\n  }\n\n  .cube__face--back[_ngcontent-%COMP%] {\n    transform: rotateY(180deg) translateZ(50px);\n  }\n\n  .cube__face--left[_ngcontent-%COMP%] {\n    transform: rotateY(-90deg) translateZ(50px);\n  }\n\n  .cube__face--top[_ngcontent-%COMP%] {\n    transform: rotateX(90deg) translateZ(50px);\n  }\n\n  .cube__face--bottom[_ngcontent-%COMP%] {\n    transform: rotateX(-90deg) translateZ(50px);\n  }\n\n  .cube[_ngcontent-%COMP%] {\n    transform: translateZ(-50px);\n  }\n\n  p[_ngcontent-%COMP%], li[_ngcontent-%COMP%] {\n    font-family: \"Quicksand\", sans-serif;\n    font-size: 1.2rem;\n  }\n\n  .red[_ngcontent-%COMP%] {\n    background-color: red;\n  }\n\n  .orange[_ngcontent-%COMP%] {\n    background-color: orange;\n  }\n\n  .purple[_ngcontent-%COMP%] {\n    background-color: purple;\n  }\n\n  #description_marketing[_ngcontent-%COMP%] {\n    display: none;\n    width: 50%;\n  }\n  #description_marketing[_ngcontent-%COMP%]   #title_marketing[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  #design[_ngcontent-%COMP%]   #description_design[_ngcontent-%COMP%] {\n    display: none;\n    width: 60%;\n  }\n\n  #coding[_ngcontent-%COMP%]   #description_coding[_ngcontent-%COMP%] {\n    display: none;\n    width: 60%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2psZy9yZW5kdTIvbmVlZXgvcG9ydGZvbGlvL3NyYy9hcHAvc2VydmljZXMvc2VydmljZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NlcnZpY2VzL3NlcnZpY2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSxjQUFBO0VDQ0Y7O0VERUE7SUFDRSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSw2QkFBQTtJQUNBLHNCQUFBO0lBQ0EsZ0JBQUE7RUNDRjs7RURHQTtJQUNFLGVBQUE7SUFDQSxlQUFBO0lBQ0EsV0FBQTtFQ0FGOztFREdBO0lBQ0UsY0FBQTtJQUNBLGVBQUE7SUFDQSxvQ0FBQTtJQUNBLGVBQUE7SUFDQSx5QkFBQTtFQ0FGOztFREdBO0lBQ0UsYUFBQTtFQ0FGOztFREdBO0lBQ0UsVUFBQTtFQ0FGOztFRElBO0lBQ0UsYUFBQTtFQ0RGOztFRElBO0lBQ0UsWUFBQTtJQUNBLFVBQUE7SUFDQSw4QkFBQTtJQUNBLGdCQUFBO0lBQ0EsV0FBQTtJQUNBLGdCQUFBO0VDREY7O0VES0E7SUFDRSxZQUFBO0lBQ0EsYUFBQTtJQUNBLGtCQUFBO0lBQ0EsZ0RBQUE7SUFDQSx3QkFBQTtFQ0ZGOztFREtBO0lBQ0UsV0FBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLDRCQUFBO0VDRkY7RURLRTtJQUNFLGlCQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSxvQ0FBQTtJQUNBLGNBQUE7SUFDQSx5QkFBQTtFQ0hKOztFRE9BO0lBQ0Usa0JBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtFQ0pGOztFRFFBO0lBQ0Usd0JBQUE7RUNMRjs7RURPQTtJQUNFLHlCQUFBO0VDSkY7O0VETUE7SUFDRSwwQkFBQTtFQ0hGOztFREtBO0lBQ0UsMEJBQUE7RUNGRjs7RURJQTtJQUNFLHlCQUFBO0VDREY7O0VER0E7SUFDRSwwQkFBQTtFQ0FGOztFRElBO0lBQ0UsMENBQUE7RUNERjs7RURHQTtJQUNFLDJDQUFBO0VDQUY7O0VERUE7SUFDRSw0Q0FBQTtFQ0NGOztFRENBO0lBQ0UsNENBQUE7RUNFRjs7RURBQTtJQUNFLDJDQUFBO0VDR0Y7O0VEREE7SUFDRSw0Q0FBQTtFQ0lGOztFRERBO0lBQ0UsNkJBQUE7RUNJRjs7RUREQTtJQUNFLG9DQUFBO0lBQ0EsaUJBQUE7RUNJRjs7RUREQTtJQUNFLHFCQUFBO0VDSUY7O0VEREE7SUFDRSx3QkFBQTtFQ0lGOztFRERBO0lBQ0Usd0JBQUE7RUNJRjs7RURDQTtJQUNFLGFBQUE7SUFDQSxVQUFBO0VDRUY7RURBRTtJQUNFLGNBQUE7RUNFSjs7RURJRTtJQUNFLGFBQUE7SUFDQSxVQUFBO0VDREo7O0VET0U7SUFDRSxhQUFBO0lBQ0EsVUFBQTtFQ0pKO0FBQ0Y7QURXQTtFQUVFO0lBQ0UsY0FBQTtFQ1ZGOztFRGFBO0lBQ0UsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsNkJBQUE7SUFDQSxzQkFBQTtJQUNBLGdCQUFBO0VDVkY7O0VEY0E7SUFDRSxlQUFBO0lBQ0EsZUFBQTtJQUNBLFdBQUE7RUNYRjs7RURjQTtJQUNFLGNBQUE7SUFDQSxlQUFBO0lBQ0Esb0NBQUE7SUFDQSxlQUFBO0lBQ0EseUJBQUE7RUNYRjs7RURjQTtJQUNFLGFBQUE7RUNYRjs7RURjQTtJQUNFLFVBQUE7RUNYRjs7RURlQTtJQUNFLGFBQUE7RUNaRjs7RURlQTtJQUNFLFlBQUE7SUFDQSxVQUFBO0lBQ0EsOEJBQUE7SUFDQSxnQkFBQTtJQUNBLFdBQUE7SUFDQSxnQkFBQTtFQ1pGOztFRGdCQTtJQUNFLFlBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSxnREFBQTtJQUNBLHdCQUFBO0VDYkY7O0VEZ0JBO0lBQ0UsV0FBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLDRCQUFBO0VDYkY7RURnQkU7SUFDRSxpQkFBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0Esb0NBQUE7SUFDQSxjQUFBO0lBQ0EseUJBQUE7RUNkSjs7RURrQkE7SUFDRSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0VDZkY7O0VEbUJBO0lBQ0Usd0JBQUE7RUNoQkY7O0VEa0JBO0lBQ0UseUJBQUE7RUNmRjs7RURpQkE7SUFDRSwwQkFBQTtFQ2RGOztFRGdCQTtJQUNFLDBCQUFBO0VDYkY7O0VEZUE7SUFDRSx5QkFBQTtFQ1pGOztFRGNBO0lBQ0UsMEJBQUE7RUNYRjs7RURlQTtJQUNFLDBDQUFBO0VDWkY7O0VEY0E7SUFDRSwyQ0FBQTtFQ1hGOztFRGFBO0lBQ0UsNENBQUE7RUNWRjs7RURZQTtJQUNFLDRDQUFBO0VDVEY7O0VEV0E7SUFDRSwyQ0FBQTtFQ1JGOztFRFVBO0lBQ0UsNENBQUE7RUNQRjs7RURVQTtJQUNFLDZCQUFBO0VDUEY7O0VEVUE7SUFDRSxvQ0FBQTtJQUNBLGlCQUFBO0VDUEY7O0VEVUE7SUFDRSxxQkFBQTtFQ1BGOztFRFVBO0lBQ0Usd0JBQUE7RUNQRjs7RURVQTtJQUNFLHdCQUFBO0VDUEY7O0VEWUE7SUFDRSxhQUFBO0lBQ0EsVUFBQTtFQ1RGO0VEV0U7SUFDRSxjQUFBO0VDVEo7O0VEZUU7SUFDRSxhQUFBO0lBQ0EsVUFBQTtFQ1pKOztFRGtCRTtJQUNFLGFBQUE7SUFDQSxVQUFBO0VDZko7QUFDRjtBRHNCQTtFQUVFO0lBQ0UsY0FBQTtFQ3JCRjs7RUR3QkE7SUFFRSxzQkFBQTtJQUNBLGdCQUFBO0VDdEJGOztFRDBCQTtJQUNFLGVBQUE7SUFDQSxlQUFBO0lBQ0EsV0FBQTtFQ3ZCRjs7RUQwQkE7SUFDRSxjQUFBO0lBQ0EsZUFBQTtJQUNBLG9DQUFBO0lBQ0EsaUJBQUE7SUFDQSx5QkFBQTtFQ3ZCRjs7RUQwQkE7SUFDRSxhQUFBO0VDdkJGOztFRDBCQTtJQUNFLFVBQUE7RUN2QkY7O0VEMkJBO0lBQ0UsYUFBQTtFQ3hCRjs7RUQyQkE7SUFDRSxZQUFBO0lBQ0EsVUFBQTtJQUNBLDhCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxXQUFBO0lBQ0EsZ0JBQUE7RUN4QkY7O0VENEJBO0lBQ0UsWUFBQTtJQUNBLGFBQUE7SUFDQSxrQkFBQTtJQUNBLGdEQUFBO0lBQ0Esd0JBQUE7RUN6QkY7O0VENEJBO0lBQ0UsV0FBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLDRCQUFBO0VDekJGO0VENEJFO0lBQ0UsaUJBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLG9DQUFBO0lBQ0EsY0FBQTtJQUNBLHlCQUFBO0VDMUJKOztFRDhCQTtJQUNFLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7RUMzQkY7O0VEK0JBO0lBQ0Usd0JBQUE7RUM1QkY7O0VEOEJBO0lBQ0UseUJBQUE7RUMzQkY7O0VENkJBO0lBQ0UsMEJBQUE7RUMxQkY7O0VENEJBO0lBQ0UsMEJBQUE7RUN6QkY7O0VEMkJBO0lBQ0UseUJBQUE7RUN4QkY7O0VEMEJBO0lBQ0UsMEJBQUE7RUN2QkY7O0VEMkJBO0lBQ0UseUNBQUE7RUN4QkY7O0VEMEJBO0lBQ0UsMENBQUE7RUN2QkY7O0VEeUJBO0lBQ0UsMkNBQUE7RUN0QkY7O0VEd0JBO0lBQ0UsMkNBQUE7RUNyQkY7O0VEdUJBO0lBQ0UsMENBQUE7RUNwQkY7O0VEc0JBO0lBQ0UsMkNBQUE7RUNuQkY7O0VEc0JBO0lBQ0UsNEJBQUE7RUNuQkY7O0VEc0JBO0lBQ0Usb0NBQUE7SUFDQSxpQkFBQTtFQ25CRjs7RURzQkE7SUFDRSxxQkFBQTtFQ25CRjs7RURzQkE7SUFDRSx3QkFBQTtFQ25CRjs7RURzQkE7SUFDRSx3QkFBQTtFQ25CRjs7RUR3QkE7SUFDRSxhQUFBO0lBQ0EsVUFBQTtFQ3JCRjtFRHVCRTtJQUNFLGNBQUE7RUNyQko7O0VEMkJFO0lBQ0UsYUFBQTtJQUNBLFVBQUE7RUN4Qko7O0VEOEJFO0lBQ0UsYUFBQTtJQUNBLFVBQUE7RUMzQko7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2VzL3NlcnZpY2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICNzZXJ2aWNlcyB7XG4gICAgcGFkZGluZzogMiUgMiU7XG5cbiAgfVxuICAjZ2xvYmFsX3NlcnZpY2VzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgcGFkZGluZzogMCUgMjAlIDIwJSAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG5cbiAgfVxuICBoMSB7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICBwYWRkaW5nOiAyJTtcbiAgfVxuXG4gIGgyIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nLXRvcDogNSU7XG4gICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG5cbiAgI3RpdGxlX2NvZGluZyB7XG4gICAgY29sb3I6IG9yYW5nZTtcbiAgfVxuXG4gICN0aXRsZV9kZXNpZ24ge1xuICAgIGNvbG9yOiByZWQ7XG5cbiAgfVxuXG4gICN0aXRsZV9tYXJrZXRpbmcge1xuICAgIGNvbG9yOiBwdXJwbGU7XG4gIH1cblxuICAuZmlsZXQge1xuICAgIGhlaWdodDogMTVweDtcbiAgICB3aWR0aDogNzAlO1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDVweCBibGFjaztcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xuICAgIHBhZGRpbmc6IDUlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cblxuICB9XG4gIC5zY2VuZSB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgcGVyc3BlY3RpdmU6IDYwMHB4O1xuICAgIGJveC1zaGFkb3c6IDEycHggMTJweCAycHggMXB4IHJnYmEoMCwgMCwgMCwgLjIpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbiAgfVxuXG4gIC5jdWJlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG5cblxuICAgIGg0IHtcbiAgICAgIG1hcmdpbjogYXV0byBhdXRvO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcbiAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB9XG4gIH1cblxuICAuY3ViZV9fZmFjZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuXG4gIH1cblxuICAuY3ViZV9fZmFjZS0tZnJvbnQge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcbiAgfVxuICAuY3ViZV9fZmFjZS0tcmlnaHQge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSg5MGRlZyk7XG4gIH1cbiAgLmN1YmVfX2ZhY2UtLWJhY2sge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuICB9XG4gIC5jdWJlX19mYWNlLS1sZWZ0IHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTkwZGVnKTtcbiAgfVxuICAuY3ViZV9fZmFjZS0tdG9wIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpO1xuICB9XG4gIC5jdWJlX19mYWNlLS1ib3R0b20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCgtOTBkZWcpO1xuICB9XG5cblxuICAuY3ViZV9fZmFjZS0tZnJvbnQge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKSB0cmFuc2xhdGVaKDEwMHB4KTtcbiAgfVxuICAuY3ViZV9fZmFjZS0tcmlnaHQge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSg5MGRlZykgdHJhbnNsYXRlWigxMDBweCk7XG4gIH1cbiAgLmN1YmVfX2ZhY2UtLWJhY2sge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpIHRyYW5zbGF0ZVooMTAwcHgpO1xuICB9XG4gIC5jdWJlX19mYWNlLS1sZWZ0IHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTkwZGVnKSB0cmFuc2xhdGVaKDEwMHB4KTtcbiAgfVxuICAuY3ViZV9fZmFjZS0tdG9wIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHRyYW5zbGF0ZVooMTAwcHgpO1xuICB9XG4gIC5jdWJlX19mYWNlLS1ib3R0b20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCgtOTBkZWcpIHRyYW5zbGF0ZVooMTAwcHgpO1xuICB9XG5cbiAgLmN1YmUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMTAwcHgpO1xuICB9XG5cbiAgcCwgbGkge1xuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgfVxuXG4gIC5yZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgfVxuXG4gIC5vcmFuZ2Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbiAgfVxuXG4gIC5wdXJwbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcbiAgfVxuICAjbWFya2V0aW5nIHtcblxuICB9XG4gICNkZXNjcmlwdGlvbl9tYXJrZXRpbmcge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgd2lkdGg6IDYwJTtcblxuICAgICN0aXRsZV9tYXJrZXRpbmcge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICB9XG5cbiAgI2Rlc2lnbiB7XG5cbiAgICAjZGVzY3JpcHRpb25fZGVzaWduIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB3aWR0aDogNjAlO1xuICAgIH1cbiAgfVxuXG4gICNjb2Rpbmcge1xuXG4gICAgI2Rlc2NyaXB0aW9uX2NvZGluZyB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgd2lkdGg6IDYwJTtcblxuICAgIH1cbiAgfVxuXG59XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcblxuICAjc2VydmljZXMge1xuICAgIHBhZGRpbmc6IDIlIDIlO1xuXG4gIH1cbiAgI2dsb2JhbF9zZXJ2aWNlcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIHBhZGRpbmc6IDAlIDIwJSAyMCUgMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuXG4gIH1cbiAgaDEge1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgcGFkZGluZzogMiU7XG4gIH1cblxuICBoMiB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZy10b3A6IDUlO1xuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuXG4gICN0aXRsZV9jb2Rpbmcge1xuICAgIGNvbG9yOiBvcmFuZ2U7XG4gIH1cblxuICAjdGl0bGVfZGVzaWduIHtcbiAgICBjb2xvcjogcmVkO1xuXG4gIH1cblxuICAjdGl0bGVfbWFya2V0aW5nIHtcbiAgICBjb2xvcjogcHVycGxlO1xuICB9XG5cbiAgLmZpbGV0IHtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCA1cHggYmxhY2s7XG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgICBwYWRkaW5nOiA1JTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG5cbiAgfVxuICAuc2NlbmUge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIHBlcnNwZWN0aXZlOiA2MDBweDtcbiAgICBib3gtc2hhZG93OiAxMnB4IDEycHggMnB4IDFweCByZ2JhKDAsIDAsIDAsIC4yKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG4gIH1cblxuICAuY3ViZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuXG5cbiAgICBoNCB7XG4gICAgICBtYXJnaW46IGF1dG8gYXV0bztcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XG4gICAgICBmb250LXNpemU6IDJlbTtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgfVxuICB9XG5cbiAgLmN1YmVfX2ZhY2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcblxuICB9XG5cbiAgLmN1YmVfX2ZhY2UtLWZyb250IHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XG4gIH1cbiAgLmN1YmVfX2ZhY2UtLXJpZ2h0IHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpO1xuICB9XG4gIC5jdWJlX19mYWNlLS1iYWNrIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbiAgfVxuICAuY3ViZV9fZmFjZS0tbGVmdCB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKC05MGRlZyk7XG4gIH1cbiAgLmN1YmVfX2ZhY2UtLXRvcCB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKTtcbiAgfVxuICAuY3ViZV9fZmFjZS0tYm90dG9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTkwZGVnKTtcbiAgfVxuXG5cbiAgLmN1YmVfX2ZhY2UtLWZyb250IHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZykgdHJhbnNsYXRlWigxMDBweCk7XG4gIH1cbiAgLmN1YmVfX2ZhY2UtLXJpZ2h0IHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpIHRyYW5zbGF0ZVooMTAwcHgpO1xuICB9XG4gIC5jdWJlX19mYWNlLS1iYWNrIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKSB0cmFuc2xhdGVaKDEwMHB4KTtcbiAgfVxuICAuY3ViZV9fZmFjZS0tbGVmdCB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKC05MGRlZykgdHJhbnNsYXRlWigxMDBweCk7XG4gIH1cbiAgLmN1YmVfX2ZhY2UtLXRvcCB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSB0cmFuc2xhdGVaKDEwMHB4KTtcbiAgfVxuICAuY3ViZV9fZmFjZS0tYm90dG9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTkwZGVnKSB0cmFuc2xhdGVaKDEwMHB4KTtcbiAgfVxuXG4gIC5jdWJlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTEwMHB4KTtcbiAgfVxuXG4gIHAsIGxpIHtcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gIH1cblxuICAucmVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIH1cblxuICAub3JhbmdlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG4gIH1cblxuICAucHVycGxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XG4gIH1cbiAgI21hcmtldGluZyB7XG5cbiAgfVxuICAjZGVzY3JpcHRpb25fbWFya2V0aW5nIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHdpZHRoOiA2MCU7XG5cbiAgICAjdGl0bGVfbWFya2V0aW5nIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgfVxuXG4gICNkZXNpZ24ge1xuXG4gICAgI2Rlc2NyaXB0aW9uX2Rlc2lnbiB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgd2lkdGg6IDYwJTtcbiAgICB9XG4gIH1cblxuICAjY29kaW5nIHtcblxuICAgICNkZXNjcmlwdGlvbl9jb2Rpbmcge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIHdpZHRoOiA2MCU7XG5cbiAgICB9XG4gIH1cblxufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcblxuICAjc2VydmljZXMge1xuICAgIHBhZGRpbmc6IDIlIDIlO1xuXG4gIH1cbiAgI2dsb2JhbF9zZXJ2aWNlcyB7XG5cbiAgICBwYWRkaW5nOiAwJSAyMCUgMjAlIDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cblxuICB9XG4gIGgxIHtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIHBhZGRpbmc6IDIlO1xuICB9XG5cbiAgaDIge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmctdG9wOiA1JTtcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuXG4gICN0aXRsZV9jb2Rpbmcge1xuICAgIGNvbG9yOiBvcmFuZ2U7XG4gIH1cblxuICAjdGl0bGVfZGVzaWduIHtcbiAgICBjb2xvcjogcmVkO1xuXG4gIH1cblxuICAjdGl0bGVfbWFya2V0aW5nIHtcbiAgICBjb2xvcjogcHVycGxlO1xuICB9XG5cbiAgLmZpbGV0IHtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCA1cHggYmxhY2s7XG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgICBwYWRkaW5nOiA1JTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG5cbiAgfVxuICAuc2NlbmUge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHBlcnNwZWN0aXZlOiAzMDBweDtcbiAgICBib3gtc2hhZG93OiAxMnB4IDEycHggMnB4IDFweCByZ2JhKDAsIDAsIDAsIC4yKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG4gIH1cblxuICAuY3ViZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuXG5cbiAgICBoNCB7XG4gICAgICBtYXJnaW46IGF1dG8gYXV0bztcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XG4gICAgICBmb250LXNpemU6IDJlbTtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgfVxuICB9XG5cbiAgLmN1YmVfX2ZhY2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcblxuICB9XG5cbiAgLmN1YmVfX2ZhY2UtLWZyb250IHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XG4gIH1cbiAgLmN1YmVfX2ZhY2UtLXJpZ2h0IHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpO1xuICB9XG4gIC5jdWJlX19mYWNlLS1iYWNrIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbiAgfVxuICAuY3ViZV9fZmFjZS0tbGVmdCB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKC05MGRlZyk7XG4gIH1cbiAgLmN1YmVfX2ZhY2UtLXRvcCB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKTtcbiAgfVxuICAuY3ViZV9fZmFjZS0tYm90dG9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTkwZGVnKTtcbiAgfVxuXG5cbiAgLmN1YmVfX2ZhY2UtLWZyb250IHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZykgdHJhbnNsYXRlWig1MHB4KTtcbiAgfVxuICAuY3ViZV9fZmFjZS0tcmlnaHQge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSg5MGRlZykgdHJhbnNsYXRlWig1MHB4KTtcbiAgfVxuICAuY3ViZV9fZmFjZS0tYmFjayB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZykgdHJhbnNsYXRlWig1MHB4KTtcbiAgfVxuICAuY3ViZV9fZmFjZS0tbGVmdCB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKC05MGRlZykgdHJhbnNsYXRlWig1MHB4KTtcbiAgfVxuICAuY3ViZV9fZmFjZS0tdG9wIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHRyYW5zbGF0ZVooNTBweCk7XG4gIH1cbiAgLmN1YmVfX2ZhY2UtLWJvdHRvbSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKC05MGRlZykgdHJhbnNsYXRlWig1MHB4KTtcbiAgfVxuXG4gIC5jdWJlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTUwcHgpO1xuICB9XG5cbiAgcCwgbGkge1xuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgfVxuXG4gIC5yZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgfVxuXG4gIC5vcmFuZ2Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbiAgfVxuXG4gIC5wdXJwbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcbiAgfVxuICAjbWFya2V0aW5nIHtcblxuICB9XG4gICNkZXNjcmlwdGlvbl9tYXJrZXRpbmcge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgd2lkdGg6IDUwJTtcblxuICAgICN0aXRsZV9tYXJrZXRpbmcge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICB9XG5cbiAgI2Rlc2lnbiB7XG5cbiAgICAjZGVzY3JpcHRpb25fZGVzaWduIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB3aWR0aDogNjAlO1xuICAgIH1cbiAgfVxuXG4gICNjb2Rpbmcge1xuXG4gICAgI2Rlc2NyaXB0aW9uX2NvZGluZyB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgd2lkdGg6IDYwJTtcblxuICAgIH1cbiAgfVxufVxuIiwiQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICNzZXJ2aWNlcyB7XG4gICAgcGFkZGluZzogMiUgMiU7XG4gIH1cblxuICAjZ2xvYmFsX3NlcnZpY2VzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgcGFkZGluZzogMCUgMjAlIDIwJSAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgaDEge1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgcGFkZGluZzogMiU7XG4gIH1cblxuICBoMiB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZy10b3A6IDUlO1xuICAgIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG5cbiAgI3RpdGxlX2NvZGluZyB7XG4gICAgY29sb3I6IG9yYW5nZTtcbiAgfVxuXG4gICN0aXRsZV9kZXNpZ24ge1xuICAgIGNvbG9yOiByZWQ7XG4gIH1cblxuICAjdGl0bGVfbWFya2V0aW5nIHtcbiAgICBjb2xvcjogcHVycGxlO1xuICB9XG5cbiAgLmZpbGV0IHtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCA1cHggYmxhY2s7XG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgICBwYWRkaW5nOiA1JTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgLnNjZW5lIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBwZXJzcGVjdGl2ZTogNjAwcHg7XG4gICAgYm94LXNoYWRvdzogMTJweCAxMnB4IDJweCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbiAgfVxuXG4gIC5jdWJlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIH1cbiAgLmN1YmUgaDQge1xuICAgIG1hcmdpbjogYXV0byBhdXRvO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cblxuICAuY3ViZV9fZmFjZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICB9XG5cbiAgLmN1YmVfX2ZhY2UtLWZyb250IHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XG4gIH1cblxuICAuY3ViZV9fZmFjZS0tcmlnaHQge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSg5MGRlZyk7XG4gIH1cblxuICAuY3ViZV9fZmFjZS0tYmFjayB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG4gIH1cblxuICAuY3ViZV9fZmFjZS0tbGVmdCB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKC05MGRlZyk7XG4gIH1cblxuICAuY3ViZV9fZmFjZS0tdG9wIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpO1xuICB9XG5cbiAgLmN1YmVfX2ZhY2UtLWJvdHRvbSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKC05MGRlZyk7XG4gIH1cblxuICAuY3ViZV9fZmFjZS0tZnJvbnQge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKSB0cmFuc2xhdGVaKDEwMHB4KTtcbiAgfVxuXG4gIC5jdWJlX19mYWNlLS1yaWdodCB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKDEwMHB4KTtcbiAgfVxuXG4gIC5jdWJlX19mYWNlLS1iYWNrIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKSB0cmFuc2xhdGVaKDEwMHB4KTtcbiAgfVxuXG4gIC5jdWJlX19mYWNlLS1sZWZ0IHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTkwZGVnKSB0cmFuc2xhdGVaKDEwMHB4KTtcbiAgfVxuXG4gIC5jdWJlX19mYWNlLS10b3Age1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCg5MGRlZykgdHJhbnNsYXRlWigxMDBweCk7XG4gIH1cblxuICAuY3ViZV9fZmFjZS0tYm90dG9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTkwZGVnKSB0cmFuc2xhdGVaKDEwMHB4KTtcbiAgfVxuXG4gIC5jdWJlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTEwMHB4KTtcbiAgfVxuXG4gIHAsIGxpIHtcbiAgICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgfVxuXG4gIC5yZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgfVxuXG4gIC5vcmFuZ2Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbiAgfVxuXG4gIC5wdXJwbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcbiAgfVxuXG4gICNkZXNjcmlwdGlvbl9tYXJrZXRpbmcge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgd2lkdGg6IDYwJTtcbiAgfVxuICAjZGVzY3JpcHRpb25fbWFya2V0aW5nICN0aXRsZV9tYXJrZXRpbmcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgI2Rlc2lnbiAjZGVzY3JpcHRpb25fZGVzaWduIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHdpZHRoOiA2MCU7XG4gIH1cblxuICAjY29kaW5nICNkZXNjcmlwdGlvbl9jb2Rpbmcge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgd2lkdGg6IDYwJTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgI3NlcnZpY2VzIHtcbiAgICBwYWRkaW5nOiAyJSAyJTtcbiAgfVxuXG4gICNnbG9iYWxfc2VydmljZXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBwYWRkaW5nOiAwJSAyMCUgMjAlIDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICBoMSB7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICBwYWRkaW5nOiAyJTtcbiAgfVxuXG4gIGgyIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nLXRvcDogNSU7XG4gICAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cblxuICAjdGl0bGVfY29kaW5nIHtcbiAgICBjb2xvcjogb3JhbmdlO1xuICB9XG5cbiAgI3RpdGxlX2Rlc2lnbiB7XG4gICAgY29sb3I6IHJlZDtcbiAgfVxuXG4gICN0aXRsZV9tYXJrZXRpbmcge1xuICAgIGNvbG9yOiBwdXJwbGU7XG4gIH1cblxuICAuZmlsZXQge1xuICAgIGhlaWdodDogMTVweDtcbiAgICB3aWR0aDogNzAlO1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDVweCBibGFjaztcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xuICAgIHBhZGRpbmc6IDUlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAuc2NlbmUge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIHBlcnNwZWN0aXZlOiA2MDBweDtcbiAgICBib3gtc2hhZG93OiAxMnB4IDEycHggMnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xuICB9XG5cbiAgLmN1YmUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgfVxuICAuY3ViZSBoNCB7XG4gICAgbWFyZ2luOiBhdXRvIGF1dG87XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuXG4gIC5jdWJlX19mYWNlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gIH1cblxuICAuY3ViZV9fZmFjZS0tZnJvbnQge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcbiAgfVxuXG4gIC5jdWJlX19mYWNlLS1yaWdodCB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKTtcbiAgfVxuXG4gIC5jdWJlX19mYWNlLS1iYWNrIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbiAgfVxuXG4gIC5jdWJlX19mYWNlLS1sZWZ0IHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTkwZGVnKTtcbiAgfVxuXG4gIC5jdWJlX19mYWNlLS10b3Age1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCg5MGRlZyk7XG4gIH1cblxuICAuY3ViZV9fZmFjZS0tYm90dG9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTkwZGVnKTtcbiAgfVxuXG4gIC5jdWJlX19mYWNlLS1mcm9udCB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpIHRyYW5zbGF0ZVooMTAwcHgpO1xuICB9XG5cbiAgLmN1YmVfX2ZhY2UtLXJpZ2h0IHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpIHRyYW5zbGF0ZVooMTAwcHgpO1xuICB9XG5cbiAgLmN1YmVfX2ZhY2UtLWJhY2sge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpIHRyYW5zbGF0ZVooMTAwcHgpO1xuICB9XG5cbiAgLmN1YmVfX2ZhY2UtLWxlZnQge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgtOTBkZWcpIHRyYW5zbGF0ZVooMTAwcHgpO1xuICB9XG5cbiAgLmN1YmVfX2ZhY2UtLXRvcCB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSB0cmFuc2xhdGVaKDEwMHB4KTtcbiAgfVxuXG4gIC5jdWJlX19mYWNlLS1ib3R0b20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCgtOTBkZWcpIHRyYW5zbGF0ZVooMTAwcHgpO1xuICB9XG5cbiAgLmN1YmUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMTAwcHgpO1xuICB9XG5cbiAgcCwgbGkge1xuICAgIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB9XG5cbiAgLnJlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICB9XG5cbiAgLm9yYW5nZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xuICB9XG5cbiAgLnB1cnBsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xuICB9XG5cbiAgI2Rlc2NyaXB0aW9uX21hcmtldGluZyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB3aWR0aDogNjAlO1xuICB9XG4gICNkZXNjcmlwdGlvbl9tYXJrZXRpbmcgI3RpdGxlX21hcmtldGluZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAjZGVzaWduICNkZXNjcmlwdGlvbl9kZXNpZ24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgd2lkdGg6IDYwJTtcbiAgfVxuXG4gICNjb2RpbmcgI2Rlc2NyaXB0aW9uX2NvZGluZyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB3aWR0aDogNjAlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICNzZXJ2aWNlcyB7XG4gICAgcGFkZGluZzogMiUgMiU7XG4gIH1cblxuICAjZ2xvYmFsX3NlcnZpY2VzIHtcbiAgICBwYWRkaW5nOiAwJSAyMCUgMjAlIDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICBoMSB7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBwYWRkaW5nOiAyJTtcbiAgfVxuXG4gIGgyIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nLXRvcDogNSU7XG4gICAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuXG4gICN0aXRsZV9jb2Rpbmcge1xuICAgIGNvbG9yOiBvcmFuZ2U7XG4gIH1cblxuICAjdGl0bGVfZGVzaWduIHtcbiAgICBjb2xvcjogcmVkO1xuICB9XG5cbiAgI3RpdGxlX21hcmtldGluZyB7XG4gICAgY29sb3I6IHB1cnBsZTtcbiAgfVxuXG4gIC5maWxldCB7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIHdpZHRoOiA3MCU7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgNXB4IGJsYWNrO1xuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XG4gICAgcGFkZGluZzogNSU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIC5zY2VuZSB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgcGVyc3BlY3RpdmU6IDMwMHB4O1xuICAgIGJveC1zaGFkb3c6IDEycHggMTJweCAycHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG4gIH1cblxuICAuY3ViZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICB9XG4gIC5jdWJlIGg0IHtcbiAgICBtYXJnaW46IGF1dG8gYXV0bztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG5cbiAgLmN1YmVfX2ZhY2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxuXG4gIC5jdWJlX19mYWNlLS1mcm9udCB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xuICB9XG5cbiAgLmN1YmVfX2ZhY2UtLXJpZ2h0IHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpO1xuICB9XG5cbiAgLmN1YmVfX2ZhY2UtLWJhY2sge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuICB9XG5cbiAgLmN1YmVfX2ZhY2UtLWxlZnQge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgtOTBkZWcpO1xuICB9XG5cbiAgLmN1YmVfX2ZhY2UtLXRvcCB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKTtcbiAgfVxuXG4gIC5jdWJlX19mYWNlLS1ib3R0b20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCgtOTBkZWcpO1xuICB9XG5cbiAgLmN1YmVfX2ZhY2UtLWZyb250IHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZykgdHJhbnNsYXRlWig1MHB4KTtcbiAgfVxuXG4gIC5jdWJlX19mYWNlLS1yaWdodCB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKDUwcHgpO1xuICB9XG5cbiAgLmN1YmVfX2ZhY2UtLWJhY2sge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpIHRyYW5zbGF0ZVooNTBweCk7XG4gIH1cblxuICAuY3ViZV9fZmFjZS0tbGVmdCB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKC05MGRlZykgdHJhbnNsYXRlWig1MHB4KTtcbiAgfVxuXG4gIC5jdWJlX19mYWNlLS10b3Age1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCg5MGRlZykgdHJhbnNsYXRlWig1MHB4KTtcbiAgfVxuXG4gIC5jdWJlX19mYWNlLS1ib3R0b20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCgtOTBkZWcpIHRyYW5zbGF0ZVooNTBweCk7XG4gIH1cblxuICAuY3ViZSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC01MHB4KTtcbiAgfVxuXG4gIHAsIGxpIHtcbiAgICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgfVxuXG4gIC5yZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgfVxuXG4gIC5vcmFuZ2Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbiAgfVxuXG4gIC5wdXJwbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcbiAgfVxuXG4gICNkZXNjcmlwdGlvbl9tYXJrZXRpbmcge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICAjZGVzY3JpcHRpb25fbWFya2V0aW5nICN0aXRsZV9tYXJrZXRpbmcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgI2Rlc2lnbiAjZGVzY3JpcHRpb25fZGVzaWduIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHdpZHRoOiA2MCU7XG4gIH1cblxuICAjY29kaW5nICNkZXNjcmlwdGlvbl9jb2Rpbmcge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgd2lkdGg6IDYwJTtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-services',
                templateUrl: './services.component.html',
                styleUrls: ['./services.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jlg/rendu2/neeex/portfolio/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map