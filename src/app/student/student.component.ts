import { Component, inject, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { EtudiantService } from '../../services/etudiant.service';
import { Etudiant } from '../../model/etudiant';
import { Faculte } from '../../model/faculte';
import { Departement } from '../../model/departement';
import { Filiere } from '../../model/filiere';
import { Promotion } from '../../model/promotion';

@Component({
  selector: 'app-student',
  imports: [RouterLink],
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  @Input() etudiant!: Etudiant;
  router: Router = inject(Router);

  nom_etudiant: string = '';
  prenom_etudiant: string = '';
  email: string = '';
  mot_de_passe: string = '';
  promotionId: number | undefined;
  filiereId: number | undefined;
  faculteId: number | undefined;
  departementId: number | undefined;
  userId: number | undefined;

  facultes: Faculte[] = [];
  departements: Departement[] = [];
  filieres: Filiere[] = [];
  promotions: Promotion[] = [];

  constructor(private etudiantService: EtudiantService) {}
  

  async onSubmit() {
    const result = await this.etudiantService.create(
      this.nom_etudiant,
      this.prenom_etudiant,
      this.email,
      this.mot_de_passe,
      this.promotionId!,
      this.filiereId!,
      this.faculteId!,
      this.departementId!,
      this.userId!
    );
    console.log(result); 
  }

  ngOnInit() {
    this.etudiantService.getFacultes().then(facultes => this.facultes = facultes);
    this.etudiantService.getDepartements().then(departements => this.departements = departements);
    this.etudiantService.getFilieres().then(filieres => this.filieres = filieres);
    this.etudiantService.getPromotions().then(promotions => this.promotions = promotions);
  }
  
}