import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TodolistService } from '../services/todolist.service';

@Component({
  selector: 'app-edit-tache',
  templateUrl: './edit-tache.component.html',
  styleUrls: ['./edit-tache.component.css']
})
export class EditTacheComponent implements OnInit {
  constructor(private toDoService: TodolistService, private route: ActivatedRoute) { }


  id: any;
  designation: any;
  paramsSubscription: Subscription

  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
     this.id = +params['id']; //log the value of id

     this.toDoService.taches.forEach(element => {
      if (element.Id == this.id) {
        this.designation = element.Designation;
      }
     });
    });
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

  taches: any[];
  editTache(des: string, id: number) {
    console.log(des);
    this.taches = this.toDoService.taches;
    this.taches.forEach(element => {
      if (element.Id == id) {
          element.Id_user = localStorage.getItem('userId'),
          element.Designation = des

      }
    });

    console.log(this.taches);

  }



}
