import { UserModel } from "./UserModel";

export class AnnotationModel{
    id: String;
    user: UserModel;
    title: string;
	cafeteria: string;
	cafe: string;
	barista: string;
	harmonizacao: string;
    complemento: string;
    metodoPreparo: string;
    descricao: string;

    constructor(annotation:AnnotationModel){
        this.id = annotation.id;
        this.user = annotation.user;
        this.title = annotation.title;
        this.cafeteria = annotation.cafeteria;
        this.cafe = annotation.cafe;
        this.barista = annotation.barista;
        this.harmonizacao = annotation.harmonizacao;
        this.complemento = annotation.complemento;
        this.metodoPreparo = annotation.metodoPreparo;
        this.descricao = annotation.descricao;
    }

}