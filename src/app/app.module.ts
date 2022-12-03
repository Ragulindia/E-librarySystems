import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

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
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {UserAuthGuard} from './user-auth.guard';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

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
    HomeComponent,
    ForgotPasswordComponent,
    SignUpComponent,
    FooterComponent,
    PageNotFoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [UserAuthGuard,AuthService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
