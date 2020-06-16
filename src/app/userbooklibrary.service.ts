import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book';
import { Observable } from 'rxjs';
/**By specifying the type User in the HttpClient‘s request methods, we can consume back-end responses in an easier and more effective way.

Lastly, let's notice the use of the @Injectable() metadata marker. 
This signals that the service should be created and injected via Angular's
dependency injectors. */
@Injectable({
  providedIn: 'root'
})
export class UserbooklibraryService {

  //make variable
    private usersUrl: string;

  //we inject hhttp client
  constructor(private http:HttpClient) { 
    this.usersUrl = 'http://localhost:8080/booklibrary';

  }
  //The findAll() method performs a GET HTTP request to 
  //the http://localhost:8080/users endpoint via Angular's HttpClient. 
  //The method returns an Observable instance that holds an array of User objects.
  public findAllBooks(): Observable<any> {
    return this.http.get<any>(this.usersUrl);
  }

  //Likewise, the save() method performs a 
  //POST HTTP request to the http://localhost:8080/users endpoint.
  public saveBook(user: Book) {
    return this.http.post<Book>(this.usersUrl, user);
  }
}
