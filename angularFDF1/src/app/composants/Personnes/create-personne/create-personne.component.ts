import { Component, OnInit, NgModule } from '@angular/core';
import { IPersonne } from 'src/app/modele/IPersonne'; //modele
import { PersonneService } from 'src/app/services/personne.service'; //service
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-create-personne',
  templateUrl: './create-personne.component.html',
  styleUrls: ['./create-personne.component.css']
})
export class CreatePersonneComponent implements OnInit {


  personne : IPersonne = {idPersonne:null, nom:null, prenom:null, email:null, telephone:null, motDePasse:null, adresse:null};

  constructor(private router : Router, 
              private personneService : PersonneService, 
              private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (parameterMap) => {
        //récup du param id de l'url (réf : route personneEdit/:id de app-routing.module.ts)
        const id = +parameterMap.get("id");

        //appel de la méthode findPersonneById() avec la valeur du param pour la récup du client à modifier
        this.findPersonneById(id);
      }
    );
  }

 

  saveOrUpdatePersonne(){

    if(this.personne.idPersonne == null){
      //--------- nouvelle personne -----------//
      /* console.log("1-ID de l'adresse : "+ this.adresse);
      this.adresseService.findAdresseById(this.adresse).subscribe(
        (adresse) => { this.personne.adresse = adresse; console.log("1-ID de l'adressePersonne : "+ this.personne.adresse.rue);}
      ); */

      //-> appel du service PersonneService pour l'ajout de l'personne
      this.personneService.ajouterPersonne(this.personne).subscribe(
        (data) => { console.log(data); }
      );

    }else{
      //--------- modification d'une personne -----------//
      //-> invocaion de la méthode du service modifierPersonne() pour la maj de la personne
      this.personneService.modifierPersonne(this.personne).subscribe(
        () => {  }
      );

    }

    //=> redirection vers la liste des personnes via la route '/list'
    this.router.navigate(['personneList']);
    console.log(this.personne);
  }



  findPersonneById(idPersonne : number){
    if(idPersonne == 0){
      //--------- ajout ----------//
      this.personne = {idPersonne:null, nom:null, prenom:null, email:null, telephone:null, motDePasse:null, adresse:null};

    }else{
      //-------- modif ---------//
      this.personneService.findPersonneById(idPersonne).subscribe(
        (personneModif) => {this.personne = personneModif}
      );
    }
  }

  listPersonne() {
    this.router.navigate(['personneList']);
  }


}
