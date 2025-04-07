import { Faculte } from './../model/faculte';
import { Departement } from '../model/departement';
import { Injectable } from '@angular/core';
import { Etudiant } from '../model/etudiant';
import { Filiere } from '../model/filiere';
import { Promotion } from '../model/promotion';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  constructor() { }

  async getFacultes(): Promise<Faculte[]> {

    let rep = await fetch(' http://localhost:3333/facultes').then(
      (response)=> response.json()
    );
    return rep;
  }

  async getDepartements(): Promise<Departement[]> {
    let rep = await fetch('http://localhost:3333/departements').then(
      (response)=> response.json()
    );
    return rep;
  }

  async getFilieres(): Promise<Filiere[]> {
    let rep = await fetch('http://localhost:3333/filieres').then(
      (response)=> response.json()
    );
    return rep;
  }

  async getPromotions(): Promise<Promotion[]> {
    let rep = await fetch('http://localhost:3333/promotions').then(
      (response)=> response.json()
    );
    return rep;
  }
  async getUser(): Promise<User[]> {
    let rep = await fetch('http://localhost:3333/user').then(
      (response)=> response.json()
    );
    return rep;
  }
  async create(
    nom_etudiant: string,
    prenom_etudiant: string,
    email: string,
    mot_de_passe: string,
    promotionId: number,
    filiereId: number,
    faculteId: number,
    departementId: number,
    userId:number
  ) {
      if (localStorage.getItem('auth')){
        const auth = JSON.parse(localStorage.getItem('auth') ?? '');

        const data = {
          nom_etudiant: nom_etudiant,
          prenom_etudiant: prenom_etudiant,
          email: email,
          mot_de_passe:mot_de_passe,
          promotionId: promotionId,
          filiereId: filiereId,
          faculteId: faculteId,
          departementId: departementId,
          userId: userId
        };

        let rep = await fetch (' http://localhost:3333/etudiants/ ',{
          headers: {
            'content-type': 'application/json',
            authorization: 'bearer' + auth.token.token,
          },
          method: 'POST',
          body: JSON.stringify(data),
        }).then((response) => response.json());

        return rep;
      }
  }

}
