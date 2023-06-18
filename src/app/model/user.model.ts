import {Role} from "./role.model";

export class User {
    idUser !: number;
    nomUser !: string;
    prenomUser !: string;
    username !: string;
    password !: string;
    role !: string;
    civilite !: string;
    mobile !: string;
    adresse !: string;
    ville !: string ;
    birthDay !: Date;
}
