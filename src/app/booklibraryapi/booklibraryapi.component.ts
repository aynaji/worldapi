import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { UserbooklibraryService } from '../userbooklibrary.service';

@Component({
  selector: 'app-booklibraryapi',
  templateUrl: './booklibraryapi.component.html',
  styleUrls: ['./booklibraryapi.component.css']
})
export class BooklibraryapiComponent implements OnInit {

 
 
  books: Array<any>;

   //call register service
    constructor(private service:UserbooklibraryService) { }
    ngOnInit(): void {
     this.service.findAllBooks().subscribe((data) => {
     this.books = data;
   });
 }

}
