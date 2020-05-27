import { Component, OnInit } from '@angular/core';
import { PersonneService } from 'src/app/services/personne.service'; //service
import { IPersonne } from 'src/app/modele/IPersonne'; //modele
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-personnes',
  templateUrl: './liste-personnes.component.html',
  styleUrls: ['./liste-personnes.component.css']
})
export class ListePersonnesComponent implements OnInit {

  //prop : tableau d'personnes
  personnes = [];

  //prop : pour la gestion de l'aperçu des infos supplémentaires
  previewInfos : boolean = false;

  constructor(private personneService : PersonneService, private router : Router) { }

  ngOnInit(): void {
    this.personneService.refreshNeeded.subscribe(
      () => { this.getAllPersonnes(); }
    );
    this.getAllPersonnes();
  }

  getAllPersonnes(){
    this.personneService.getAllPersonne().subscribe(
      liste => this.personnes = liste
    );
  }


  deletePersonne(personne : IPersonne){
    this.personneService.supprimerPersonne(personne).subscribe(
      () => { this.personnes.filter(cl => cl != personne); }
    );
  }


  editEnseignant(idEnseignant: number) {
    this.router.navigate(['enseignantEdit/', idEnseignant]);
  }

  editEtudiant(idEtudiant: number) {
    this.router.navigate(['etudiantEdit/', idEtudiant]);
  } 


}
