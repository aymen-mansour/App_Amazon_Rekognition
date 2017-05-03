import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import {LoginComponent} from "./login/login.component";
import {FacialanalysisComponent} from "./facialanalysis/facialanalysis.component";

const routes: Routes = [
  { path: '', redirectTo: '_login', pathMatch: 'full' },
  { path: '_login',  component: LoginComponent },
  { path: '_facialanalysis',  component:FacialanalysisComponent  }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
