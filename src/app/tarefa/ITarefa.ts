import { ISubTarefa } from "./ISubTarefa";

export interface ITarefa{
    
    idTarefa: number;
    titulo: string;
    descricao: string;
    finalizado: boolean;
    subTarefas: ISubTarefa[];    
}