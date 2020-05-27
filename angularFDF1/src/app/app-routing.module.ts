import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Adresses
import { ListeAdressesComponent } from 'src/app/composants/Adresses/liste-adresses/liste-adresses.component';
import { CreateAdresseComponent } from 'src/app/composants/Adresses/create-adresse/create-adresse.component';
//Personnes
import { ListePersonnesComponent } from 'src/app/composants/Personnes/liste-personnes/liste-personnes.component';
import { CreatePersonneComponent } from 'src/app/composants/Personnes/create-personne/create-personne.component';


const routes: Routes = [
  //Routes par défaut

  //Routes Adresses
  {path: "adresseList", component: ListeAdressesComponent},
  {path: "adresseEdit/:id", component: CreateAdresseComponent},

  //Routes Personnes
  {path: "personneList", component: ListePersonnesComponent},
  {path: "personneEdit/:id", component: CreatePersonneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
