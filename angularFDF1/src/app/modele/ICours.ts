import { IEnseignant } from './IEnseignant';
import { IEtudiant } from './IEtudiant';

export interface ICours {

    idCours : number;
    libelle : string;
    
    enseignant : IEnseignant;
    listeEtudiant : IEtudiant[];

}