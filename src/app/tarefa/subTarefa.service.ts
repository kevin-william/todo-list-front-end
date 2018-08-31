import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { SubTarefa } from "./SubTarefa";
import { ISubTarefa } from "./ISubTarefa";

const ApiPath= "https://localhost:44301/api/";

@Injectable({
    providedIn: 'root'
})
export class SubTarefaService{

    constructor(private http: HttpClient){ }

    getSubTarefas() {        
        return this.http.get<ISubTarefa[]>(ApiPath+"subtarefas");              
    }

    getSubTarefa(id: number){
        return this.http.get<ISubTarefa>(ApiPath+"subtarefa/"+id);
    }

    setSubTarefa(subTarefa: SubTarefa){
        return this.http.post(ApiPath+"subtarefas", {
            titulo: subTarefa.titulo,
            descricao: subTarefa.descricao,
            finalizado: subTarefa.finalizado,
            idTarefa: subTarefa.idTarefa            
        });
    }

    updateSubTarefa(subTarefa: SubTarefa){
        return this.http.put(ApiPath+"subtarefas/"+subTarefa.idSubTarefa, subTarefa);
    }

    deleteSubTarefa(id: number){
        return this.http.delete(ApiPath+"subtarefas/"+id);
    }

    finalizarSubTarefa(id: number){
        return this.http.put(ApiPath+"finalizarSubtarefa/"+id,{
            idSubTarefa:id,
            finalizado:true
            });
    }
    

}