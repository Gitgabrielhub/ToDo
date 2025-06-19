export class Todo{
    id:number;
    nome:string;
    titulo:string;
    done:boolean;
    descricaco:string;

    constructor(id:number,nome:string,titulo:string, done:boolean, descricaco:string){
        this.id = id;
        this.nome=nome;
        this.titulo = titulo;
        this.done=done;
        this.descricaco = descricaco

    }


}