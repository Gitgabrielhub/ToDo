export class Todo{
    id:number;
    titulo:string;
    nome:string;
    done:boolean;
    descricaco:string;

    constructor(id:number,titulo:string,nome:string, done:boolean, descricaco:string){
        this.id = id;
        this.titulo = titulo;
        this.nome = nome;
        this.done=done;
        this.descricaco = descricaco

    }


}