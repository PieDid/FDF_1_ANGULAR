import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { IAdresseComponent } from './modele/iadresse/iadresse.component';
import { IPersonneComponent } from './modele/ipersonne/ipersonne.component';
import { IEtudiantComponent } from './modele/ietudiant/ietudiant.component';
import { IEnseignantComponent } from './modele/ienseignant/ienseignant.component';
import { ICoursComponent } from './modele/icours/icours.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IAdresseComponent,
    IPersonneComponent,
    IEtudiantComponent,
    IEnseignantComponent,
    ICoursComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
