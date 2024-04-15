import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@components/home/home.component';
import { DashboardComponent } from '@modules/auth/dashboard/dashboard.component';
import { LoginComponent } from '@modules/auth/login/login.component';
import { CreateComponent } from '@modules/patron/create/create.component';
import { IndexComponent } from '@modules/patron/index/index.component';
import { authGuard } from './core/guards/auth.guard';
import { RegisterComponent } from '@modules/auth/register/register.component';

const routes: Routes = [
      { path: '', component: HomeComponent},
      { path: 'patrones', redirectTo: 'patrones/index', pathMatch: 'full'},
      { path: 'patrones/index', component: IndexComponent },
      { path: 'patrones/nuevo', component: CreateComponent , canActivate: [authGuard]},

      /*Auth path */
      {path: 'login', component: LoginComponent},
      {path: 'registrar', component: RegisterComponent},
      //{path: 'logout', component: LoginComponent},
      {path: 'dashboard', component: DashboardComponent, canActivate: [authGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
