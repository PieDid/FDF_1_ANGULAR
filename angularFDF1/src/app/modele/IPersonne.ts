import { IAdresse } from './IAdresse';

export interface IPersonne {

    idPersonne : number;
    nom : string;
    prenom : string;
    telephone : string;
    email : string;
    motDePasse : string;
    
    adresse : IAdresse;
    
}