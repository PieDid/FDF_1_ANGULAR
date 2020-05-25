import { IPersonne } from './IPersonne';
import { ICours } from './ICours';

export interface IEtudiant extends IPersonne {

   promotion : number;
   
   listeCours : ICours[];

}