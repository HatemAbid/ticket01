import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { InscriptionComponent } from "./inscription/inscription.component";
import { LoginComponent } from "./login/login.component";

const APP_ROUTING: Routes = [

  {path: 'dashboard', component: DashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'inscription', component: InscriptionComponent},

];
export const ROUTING = RouterModule.forRoot(APP_ROUTING,{
  useHash: true
});
