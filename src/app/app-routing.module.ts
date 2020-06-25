import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectsComponent} from "./projects/projects.component";
import {HeaderComponent} from "./header/header.component";
import {AboutMeComponent} from "./about-me/about-me.component";
import {FooterComponent} from "./footer/footer.component";
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {ServicesComponent} from "./services/services.component";
import {ContactComponent} from "./contact/contact.component";


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},

  { path: 'project', component: ProjectsComponent, data: {animation: 'project'} },
  { path: 'home', component: HeaderComponent, data: {animation: 'home'} },
  { path: 'home', component: AboutMeComponent },
  { path: 'home', component: FooterComponent },
  {path:'home', component: NavBarComponent},
  {path:'home', component: ServicesComponent},
  {path:'contact', component: ContactComponent, data: {animation: 'contact'} }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ProjectsComponent, HeaderComponent, AboutMeComponent, FooterComponent, NavBarComponent, ServicesComponent, ContactComponent]
