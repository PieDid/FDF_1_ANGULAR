import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import de HttpClientModule :
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ListeAdressesComponent } from 'src/app/composants/Adresses/liste-adresses/liste-adresses.component';
import { CreateAdresseComponent } from 'src/app/composants/Adresses/create-adresse/create-adresse.component';
import { ListePersonnesComponent } from './composants/Personnes/liste-personnes/liste-personnes.component';
import { CreatePersonneComponent } from './composants/Personnes/create-personne/create-personne.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListeAdressesComponent,
    CreateAdresseComponent,
    ListePersonnesComponent,
    CreatePersonneComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
