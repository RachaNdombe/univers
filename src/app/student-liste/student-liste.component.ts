import { Component, inject } from '@angular/core';
import { EtudiantService } from '../../services/etudiant.service';
import { Etudiant } from '../../model/etudiant';
import { StudentComponent } from '../student/student.component';
import { Router, RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-student-liste',
  imports: [StudentComponent, RouterLink,NgFor ],
  templateUrl: './student-liste.component.html',
  styleUrl: './student-liste.component.css'
})
export class StudentListeComponent {
    service: EtudiantService = inject (EtudiantService)
    router: Router= inject(Router)
    etudiants!: Etudiant[]

    ngOnInit(){
     
    }
    
    onSubmit() {
      
      this.router.navigate(['/see']); 
  }
}

