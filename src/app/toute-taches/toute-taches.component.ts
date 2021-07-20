import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, ROUTES } from '@angular/router';
import { TodolistService } from '../services/todolist.service';

@Component({
  selector: 'app-toute-taches',
  templateUrl: './toute-taches.component.html',
  styleUrls: ['./toute-taches.component.css']
})
export class TouteTachesComponent implements OnInit {

  tache = new Array();
  taches: any[];
  // taches: Tache[] = [];
  constructor(private toDoService: TodolistService, private router: Router) { }

  ngOnInit(): void {
    this.toDoService.taches.forEach(element => {
      if (element.Id_user == localStorage.getItem("userId")) {
        this.tache.push(element);
      }
    });
    this.taches = this.tache;
    console.log("elements", this.taches);

  }

  removeTache(id:number): void {
    this.toDoService.remTache(id);
    this.router.navigate(['/taches']);
    console.log("delete", this.toDoService.taches);
  }

  updTache(id: number): void {
    console.log("delete");

    this.router.navigateByUrl(`/taches/${id}` )
    // this.toDoService.updTache(id);
    // console.log("delete", this.toDoService.taches);

  }
    // this.geTaches();
}
