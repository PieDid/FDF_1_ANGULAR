import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeAdressesComponent } from 'src/app/composants/Adresses/liste-adresses/liste-adresses.component';
import { CreateAdresseComponent } from 'src/app/composants/Adresses/create-adresse/create-adresse.component';


const routes: Routes = [
  //Routes par défaut

  //Routes Adresses
  {path: "adresseList", component: ListeAdressesComponent},
  {path: "adresseEdit/:id", component: CreateAdresseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
