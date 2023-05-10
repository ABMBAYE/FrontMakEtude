import {Year} from "./year.model";

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
    attente?: string;
    accepte? : string;
    refus? : string;

    year = new Year();
}
