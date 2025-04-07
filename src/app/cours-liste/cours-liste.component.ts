import { CoursComponent } from './../cours/cours.component';
import { Component, inject } from '@angular/core';
import { CoursService } from '../../services/cours.service';
import { Router, RouterLink } from '@angular/router';
import { Cours } from '../../model/cours';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-cours-liste',
  imports: [RouterLink,NgFor, CoursComponent],
  templateUrl: './cours-liste.component.html',
  styleUrl: './cours-liste.component.css'
})
export class CoursListeComponent {
service: CoursService= inject(CoursService)
route: Router= inject(Router)
cours!: Cours[]

ngOnInit() {
  
}
}
