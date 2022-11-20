import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RulesComponent } from './rules/rules.component';
import { PriceDetailsComponent } from './price-details/price-details.component';
import { LoginComponent } from './login/login.component';
import { SearchItemsComponent } from './search-items/search-items.component';
import { AddBookComponent } from './add-book/add-book.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserAuthGuard } from './user-auth.guard';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'about-us',component:AboutUsComponent,canActivate:[UserAuthGuard]},
  {path:'rules',component:RulesComponent,canActivate:[UserAuthGuard]},
  {path:'price-details',component:PriceDetailsComponent,canActivate:[UserAuthGuard]},
  {path:'login',component:LoginComponent},
  // {path:'search',component:SearchItemsComponent},
  {path:'add-book',component:AddBookComponent,canActivate:[UserAuthGuard]},
  {path:'forgot-password',component:ForgotPasswordComponent },
  {path:'sign-up',component:SignUpComponent},
  {path:'',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
