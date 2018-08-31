import { SubTarefa } from "./SubTarefa";

export class Tarefa{
    public idTarefa: number;
    public titulo: string;
    public descricao: string;    
    public finalizado: boolean;
    public subTarefas: SubTarefa[];

}