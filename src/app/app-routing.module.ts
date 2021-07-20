import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AddTacheComponent } from './add-tache/add-tache.component';
import { EditTacheComponent } from './edit-tache/edit-tache.component';
import { LoginErrorComponent } from './login-error/login-error.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { TacheComponent } from './tache/tache.component';
import { TouteTachesComponent } from './toute-taches/toute-taches.component';

import { ExpenseGuard } from './_guards/expense.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'error', component: LoginErrorComponent },
  { path: 'taches', component: TouteTachesComponent, canActivate: [ExpenseGuard]},
  { path: 'taches/:id', component: EditTacheComponent, canActivate: [ExpenseGuard]},
  { path: 'add', component: AddTacheComponent, canActivate: [ExpenseGuard]},
  { path: '', component: AccueilComponent },
  // { path: '', redirectTo: 'expenses', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
