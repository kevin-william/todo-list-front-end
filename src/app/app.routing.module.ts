import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router'

import { NotFoundComponent } from "./erros/not-found/not-found.component";
import { ListaTarefasComponent } from "./tarefa/lista-tarefas/lista-tarefas.component";
import { FormularioTarefaComponent } from "./tarefa/formulario-tarefa/formulario-tarefa.component";
import { AlterarTarefaComponent } from "./tarefa/alterar-tarefa/alterar-tarefa.component";
import { RemoverTarefaComponent } from "./tarefa/remover-tarefa/remover-tarefa.component";
import { ExibeTarefaComponent } from "./tarefa/exibe-tarefa/exibe-tarefa.component";
import { AlterarSubtarefaComponent } from "./tarefa/alterar-subtarefa/alterar-subtarefa.component";
import { RemoverSubtarefaComponent } from "./tarefa/remover-subtarefa/remover-subtarefa.component";
import { FormularioSubtarefaComponent } from "./tarefa/formulario-subtarefa/formulario-subtarefa.component";

const routes: Routes= [    
    {path: 'alterarTarefa/:id', component: AlterarTarefaComponent},
    {path: 'removerTarefa/:id', component: RemoverTarefaComponent},
    {path: 'removerSubTarefa/:id', component: RemoverSubtarefaComponent},
    {path: 'cadastrarTarefa', component: FormularioTarefaComponent},
    {path: 'cadastrarSubTarefa/:id', component: FormularioSubtarefaComponent},
    {path: 'exibirTarefa/:id', component: ExibeTarefaComponent},    
    {path: 'alterarSubtarefa/:id', component: AlterarSubtarefaComponent},
    {path: 'listarTarefas', component: ListaTarefasComponent},
    {path: '', component: ListaTarefasComponent},
    {path: '**', component: NotFoundComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{}