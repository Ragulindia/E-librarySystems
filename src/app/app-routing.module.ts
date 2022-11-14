import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RulesComponent } from './rules/rules.component';
import { PriceDetailsComponent } from './price-details/price-details.component';
import { LoginComponent } from './login/login.component';
import { SearchItemsComponent } from './search-items/search-items.component';
import { AddBookComponent } from './add-book/add-book.component';
const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'rules',component:RulesComponent},
  {path:'price-details',component:PriceDetailsComponent},
  {path:'login',component:LoginComponent},
  {path:'search',component:SearchItemsComponent},
  {path:'add-book',component:AddBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
