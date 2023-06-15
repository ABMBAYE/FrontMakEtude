import {Year} from "./year.model";
import {Gerant} from "./gerant.model";
import {Client} from "./client.model";

export class ClientPar {
    idClientPar!: number;
    prenom?: string;
    nom?: string;
    compteCF?: string;
    numTel?: string;
    adresseMail?: string;
    motDePasse?: string;
    numDossier?: string;
    inscription?: string;
    formulation?: string;
    confirmation?: string;
    reliquat ?: string;
    attente?: number;
    accepte? : number;
    refus? : number;
    year = new Year();

    gerant = new Gerant();
}
