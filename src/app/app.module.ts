import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RulesComponent } from './rules/rules.component';
import { PriceDetailsComponent } from './price-details/price-details.component';
import { LoginComponent } from './login/login.component';
import { SearchItemsComponent } from './search-items/search-items.component';
import { AddBookComponent } from './add-book/add-book.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutUsComponent,
    RulesComponent,
    PriceDetailsComponent,
    LoginComponent,
    SearchItemsComponent,
    AddBookComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
