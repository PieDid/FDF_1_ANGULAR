import { Injectable } from '@angular/core';
//import du module HttpClient :
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
//import des opérateurs de rxjs
import { tap, filter, map } from 'rxjs/operators';
import { IAdresse } from '../modele/IAdresse';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AdresseService {

  private WS_REST_BASE_URL = "http://localhost:8080/fdf1/adresse-rest/adresse";

  refreshNeeded = new Subject();

  constructor(private httpClient: HttpClient, private router: Router) { }

  getAllAdresse(): Observable<IAdresse[]> {
    return this.httpClient.get<IAdresse[]>(`${this.WS_REST_BASE_URL}List`);
  } // end getAllAdresse()

  findAdresseById(idAdresse: number): Observable<IAdresse> {
    return this.httpClient.get<IAdresse>(`${this.WS_REST_BASE_URL}/${idAdresse}`);
  } // end findAdresseById()

  editAdresse(idAdresse: number) {
    this.router.navigate(['edit/', idAdresse]);
  } // end editAdresse()

  ajouterAdresse(adresse: IAdresse): Observable<IAdresse> {
    return this.httpClient.post<IAdresse>(`${this.WS_REST_BASE_URL}Add`, adresse).pipe(tap(() => { this.refreshNeeded.next() }));
  } // end ajouterAdresse()

  modifierAdresse(adresse: IAdresse): Observable<void> {
    return this.httpClient.put<void>(`${this.WS_REST_BASE_URL}Update/${adresse.idAdresse}`, adresse).pipe(tap(() => { this.refreshNeeded.next() }));
  } // end modifierAdresse()

  supprimerAdresse(adresse: IAdresse): Observable<void> {
    return this.httpClient.delete<void>(`${this.WS_REST_BASE_URL}Delete/${adresse.idAdresse}`).pipe(tap(() => { this.refreshNeeded.next() }));
  } // end supprimerAdresse()


  /*__________ méthodes spécifiques __________*/

  findAdressesByRue(rue : string) : Observable<IAdresse[]>{
    return this.httpClient.get<IAdresse[]>(`${this.WS_REST_BASE_URL}/rue/${rue}`);
  } // end findAdressesByRue()

  findAdressesByCodePostal(codePostal : string) : Observable<IAdresse[]>{
    return this.httpClient.get<IAdresse[]>(`${this.WS_REST_BASE_URL}/codePostal/${codePostal}`);
  } // end findAdressesByCodePostal()

  findAdressesByVille(ville : string) : Observable<IAdresse[]>{
    return this.httpClient.get<IAdresse[]>(`${this.WS_REST_BASE_URL}/ville/${ville}`);
  } // end findAdressesByVille()
  
}
