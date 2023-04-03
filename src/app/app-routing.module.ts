import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginComponent } from './modules/login/login.component';
import { FactsComponent } from './modules/facts/facts.component';

const routes: Routes = [
  { path: '', redirectTo: '/facts', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'facts',
    canActivate: [AuthGuard],
    component: FactsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
