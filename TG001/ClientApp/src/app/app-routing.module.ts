import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GerenciarBoletosComponent } from './pages/boletos/gerenciar-boletos/gerenciar-boletos.component';
import { TelaContaComponent } from './pages/tela-conta/tela-conta.component';


const routes: Routes = [
  { path: 'Contas/Boletos', component: GerenciarBoletosComponent },
  { path: 'Contas', component: TelaContaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
