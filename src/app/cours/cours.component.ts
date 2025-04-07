import { Component, Inject, Input, input } from '@angular/core';
import { Cours } from '../../model/cours';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cours',
  imports: [],
  templateUrl: './cours.component.html',
  styleUrl: './cours.component.css'
})
export class CoursComponent {
@Input() cours!: Cours
router: Router=Inject(Router)
}
