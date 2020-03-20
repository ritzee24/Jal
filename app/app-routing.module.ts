import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_helpers/auth.guard';

/**Componenets */
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';


const routes: Routes = [
  // { path: '', component: WelcomeComponent, canActivate: [AuthGuard] },
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  // { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
  { 
    path: 'login', 
    component: LoginComponent 
  },
  { 
    path: 'register', 
    component: RegisterComponent 
  },
  { path: '**', redirectTo: '' }

];


// RouterModule.forRoot([
//   { path: 'welcome', component: WelcomeComponent },
//   { path: '', redirectTo: 'welcome', pathMatch: 'full' },
//   { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
// ]),

@NgModule({
  imports: [RouterModule.forRoot(routes),ProductModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
