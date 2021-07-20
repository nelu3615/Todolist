import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  taches = [
    {
    Id : 1,
    Id_user : "1",
    Designation : 'faire les courses'
    },
      {
    Id : 2,
    Id_user : "1",
    Designation : 'acheter médicaments'
    },
      {
    Id :3,
    Id_user : "2",
    Designation : 'conduire ma voiture'
    },
      {
    Id : 4,
    Id_user : "3",
    Designation : 'travailler sur un projet todoList'
    },
      {
    Id : 5,
    Id_user : "3",
    Designation : 'créer BdD pour le projet todoList'
    },
      {
    Id :6,
    Id_user : "2",
    Designation : 'faire le ménage'
    },
  ];

  remTache(id: number) {
    this.taches.forEach(element => {
      if (element.Id === id) {
        console.log('delete', element);
        const index = this.taches.indexOf(element);
        this.taches.splice(index, 1);


      }
    });
  }
  
  updTache(des: string, id: number) {
    this.taches.forEach(element => {
      if (element.Id == id) {
        const index = this.taches.indexOf(element);

        this.taches.splice(index, 1);
      }
    });
    this.taches.push({
      Id: id,
      Id_user: localStorage.getItem('userId'),
      Designation: des
    })
    console.log(des);
  }

}
