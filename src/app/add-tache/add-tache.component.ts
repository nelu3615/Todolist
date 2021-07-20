import { Component, OnInit } from '@angular/core';
import { count } from 'rxjs/operators';
import { TodolistService } from '../services/todolist.service';

@Component({
  selector: 'app-add-tache',
  templateUrl: './add-tache.component.html',
  styleUrls: ['./add-tache.component.css']
})
export class AddTacheComponent implements OnInit {

  taches: any[];

  constructor(private toDoService: TodolistService) { }

  ngOnInit(): void {

  }
  saveTache(st: string) {
    this.taches = this.toDoService.taches;
    let obj = {
      Id: this.taches.length +1,
      Id_user: localStorage.getItem('userId'),
      Designation: st
  };
    console.log("newTache", obj);
    this.taches.push(obj);
    console.log("newTache", this.taches);

  }


}
