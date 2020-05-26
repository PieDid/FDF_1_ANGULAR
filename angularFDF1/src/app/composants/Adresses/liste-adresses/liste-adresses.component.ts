import { Component, OnInit } from '@angular/core';
import { IAdresse } from 'src/app/modele/IAdresse'; //import du modele
import { AdresseService } from 'src/app/services/adresse.service';//import du service
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-adresses',
  templateUrl: './liste-adresses.component.html',
  styleUrls: ['./liste-adresses.component.css']
})
export class ListeAdressesComponent implements OnInit {

  adresse = [];
  private adresseService : AdresseService;

  constructor(private router : Router) { }

  ngOnInit(): void {
    this.adresseService.refreshNeeded.subscribe(
      () => {this.getAllAdresse();}
    );
    this.getAllAdresse();
  }

  getAllAdresse(){
    this.adresseService.getAllAdresse().subscribe(
      liste => { this.adresse = liste }
    );
  }

  deleteAdresse(adresse : IAdresse){
    this.adresseService.supprimerAdresse(adresse);
  }

  editAdresse(idAdresse : number){
    this.adresseService.editAdresse(idAdresse);
  }

}
