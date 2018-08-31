import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { ListaTarefasComponent } from './lista-tarefas/lista-tarefas.component';
import { FormularioTarefaComponent } from './formulario-tarefa/formulario-tarefa.component';
import { TarefasComponent } from './lista-tarefas/tarefas/tarefas.component';
import { AlterarTarefaComponent } from './alterar-tarefa/alterar-tarefa.component';
import { RemoverTarefaComponent } from './remover-tarefa/remover-tarefa.component';
import { ExibeTarefaComponent } from './exibe-tarefa/exibe-tarefa.component';
import { SubtarefasComponent } from './subtarefas/subtarefas.component';
import { AlterarSubtarefaComponent } from './alterar-subtarefa/alterar-subtarefa.component';
import { RemoverSubtarefaComponent } from './remover-subtarefa/remover-subtarefa.component';
import { FormularioSubtarefaComponent } from './formulario-subtarefa/formulario-subtarefa.component';


@NgModule({
  imports: [
    CommonModule, 
    FormsModule, 
    NgbModule
  ],
  declarations: [
    ListaTarefasComponent, 
    FormularioTarefaComponent, 
    TarefasComponent, 
    AlterarTarefaComponent, 
    RemoverTarefaComponent, 
    ExibeTarefaComponent,     
    SubtarefasComponent, AlterarSubtarefaComponent, RemoverSubtarefaComponent, FormularioSubtarefaComponent]
})
export class TarefaModule { }
