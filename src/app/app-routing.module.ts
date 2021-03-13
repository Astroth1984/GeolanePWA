import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login/login.component';
import { ConfigComponent } from './pages/config/config.component';
import { FramTypeComponent } from './pages/fram-type/fram-type.component';
import { PassParToutComponent } from './pages/pass-par-tout/pass-par-tout.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'framing-type', component: FramTypeComponent },
  { path: 'config', component: ConfigComponent },
  { path: 'pass-par-tout', component: PassParToutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
