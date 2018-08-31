import { HttpClient } from "@angular/common/http";
import { Tarefa } from "./Tarefa";
import { Injectable } from "@angular/core";


const ApiPath= "https://localhost:44301/api/";

@Injectable({
    providedIn: 'root'
})
export class TarefaService{

    constructor(private http: HttpClient){ }

    getTarefas() {
        
        return this.http.get<Tarefa[]>(ApiPath+"Tarefas");              
    }
    getTarefa(id: number){
        return this.http.get<Tarefa>(ApiPath+"Tarefas/"+id);
    }

    setTarefa(tarefa: Tarefa){
        return this.http.post(ApiPath+"Tarefas", {
            titulo: tarefa.titulo,
            descricao: tarefa.descricao,
            finalizado: tarefa.finalizado            
        });
    }

    updateTarefa(tarefa: Tarefa){
        return this.http.put(ApiPath+"Tarefas/"+tarefa.idTarefa, tarefa);
    }

    deleteTarefa(id: number){
        return this.http.delete(ApiPath+"Tarefas/"+id);
    }

    obterPercentualDeTarefasFinalizadas(){
        return this.http.get<number>(ApiPath+"Tarefas/percentualCompletas");
    }

    finalizarTarefa(id: number, finalizar: boolean){
        return this.http.put(ApiPath+"finalizarTarefa/", {
            idTarefa:id,
            finalizado:finalizar
            }
        );
    }
    

}