import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooklibraryapiComponent } from './booklibraryapi/booklibraryapi.component';
import { FatlosscalculatorComponent } from './fatlosscalculator/fatlosscalculator.component';
import { WeatherapiComponent } from './weatherapi/weatherapi.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegisterComponent } from './register/register.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [ 
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path:'home', component:HomeComponent},
{ path:'booklibraryapi', component:BooklibraryapiComponent},
{ path:'fatlosscalculator', component: FatlosscalculatorComponent},
{ path:'weatherapi', component: WeatherapiComponent},
{ path:'login', component: LoginpageComponent},
{ path:'register', component: RegisterComponent},
{ path:'aboutme', component: AboutmeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent=[
  BooklibraryapiComponent,
  FatlosscalculatorComponent,
  WeatherapiComponent,
  LoginpageComponent,
  RegisterComponent,
  AboutmeComponent,HomeComponent];
