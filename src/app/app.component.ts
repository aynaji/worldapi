import { Component, Input,OnInit } from '@angular/core';
//when you make a class, its only available to this component, so we need to
//use @input decorator to expose a variable to other component
// angular is a single page application
//components provide binding of data with the view
//component generate view from template url
import { Book } from './book';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 
}

