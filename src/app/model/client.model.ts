import {Year} from "./year.model";
import {Gerant} from "./gerant.model";

export class Client {
    idClient!: number;
    prenom?: string;
    nom?: string;
    identifiant?: string;
    numTel?: string;
    adresseMail?: string;
    motDePasse?: string;
    paiement?: string;
    entretien?: string;
    soumis?: string;
    acceptation?: string;
    refus?: string;
    dateEntretien? : Date;
    year = new Year();
    gerant = new Gerant();
}
