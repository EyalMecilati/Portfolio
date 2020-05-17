import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './componants/home-page/home-page.component';
import { CvComponent } from './componants/cv/cv.component';


const routes: Routes = [
  { path: 'Eyal-Mecilati', component: HomePageComponent}, 
  { path: '', redirectTo: '/Eyal-Mecilati', pathMatch: 'full'},
  { path: 'cv', component:CvComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
