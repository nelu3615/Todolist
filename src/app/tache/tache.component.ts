import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { TodolistService } from '../services/todolist.service';

@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrls: ['./tache.component.css']
})
export class TacheComponent implements OnInit {
  @Input() id: string;
  @Input() designation: string;
  @Input() index: number;

  @Output() deleteTache = new EventEmitter()
  @Output() modifierTache = new EventEmitter()
  constructor( private toDoService: TodolistService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    
  }



}
