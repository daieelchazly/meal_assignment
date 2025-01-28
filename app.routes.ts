import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'portofolio',component:PortofolioComponent},
    {path:'contact',component:ContactComponent},
    {path:'',redirectTo:'home', pathMatch:'full'},
    {path:'**',component:NotfoundComponent},
];
