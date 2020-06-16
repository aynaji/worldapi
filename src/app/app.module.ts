import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BooklibraryapiComponent } from './booklibraryapi/booklibraryapi.component';
import { FatlosscalculatorComponent } from './fatlosscalculator/fatlosscalculator.component';
import { WeatherapiComponent } from './weatherapi/weatherapi.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegisterComponent } from './register/register.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { HomeComponent } from './home/home.component';
import { Book } from './book';
import { UserbooklibraryService } from './userbooklibrary.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BooklibraryapiComponent,
    FatlosscalculatorComponent,
    WeatherapiComponent,
    LoginpageComponent,
    RegisterComponent,
    AboutmeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UserbooklibraryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
