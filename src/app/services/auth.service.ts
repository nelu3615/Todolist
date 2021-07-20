import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isUserLoggedIn: boolean = false;
  userId: any;
  users = [
    {
  Id : "1",
  nom : 'Anis',
  mail : 'anis@pop.fr',
  password : '0000'
  },
    {
  Id : "2",
  nom : 'Enzo',
  mail : 'enzo@pop.fr',
  password : '0000'
  },
      {
  Id : "3",
  nom : 'Ion',
  mail : 'ion@pop.fr',
  password : '1234'
  },
  ];

  login(userName: string, password: string): Observable<any> {
     console.log(userName);
     console.log(password);
     this.users.forEach(element => {
       if (userName == element.mail && password == element.password) {
        this.isUserLoggedIn = userName == element.mail && password == element.password;
        this.userId = element.Id;
        localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "true" : "false"); 
        localStorage.setItem('userId', this.userId); 
   
       }
     });

  return of(this.isUserLoggedIn).pipe(
     delay(1000),
     tap(val => { 
        console.log("Is User Authentication is successful: " + val); 
     })
  );
  }

  logout(): void {
  this.isUserLoggedIn = false;
     localStorage.removeItem('isUserLoggedIn'); 
     localStorage.removeItem('userId'); 
  }
  constructor() { }
}
