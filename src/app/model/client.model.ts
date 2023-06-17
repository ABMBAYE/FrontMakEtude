import {Year} from "./year.model";
import {Gerant} from "./gerant.model";
import {User} from "./user.model";

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
    acceptation?: number;
    refus?: number;
    dateEntretien? : Date;
    reliquat ?: string;
    year = new Year();
    gerant = new Gerant();
    user = new User();
}
