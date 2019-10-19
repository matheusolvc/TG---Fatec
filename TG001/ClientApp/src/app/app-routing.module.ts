import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainBoletosComponent } from './pages/boletos/main-boletos/main-boletos.component';
import { TelaContaComponent } from './pages/tela-conta/tela-conta.component';
import { MainImpostosComponent } from './pages/impostos/main-impostos/main-impostos.component';
import { GerenciarBoletosComponent } from './pages/boletos/gerenciar-boletos/gerenciar-boletos.component';
import { GerenciarImpostosComponent } from './pages/impostos/gerenciar-impostos/gerenciar-impostos.component';
import { GerenciarOutrasComponent } from './pages/outras/gerenciar-outras/gerenciar-outras.component';
import { MainOutrasComponent } from './pages/outras/main-outras/main-outras.component';
import { MigrarContasComponent } from './pages/migrar-contas/migrar-contas.component';


const routes: Routes = [
  { path: 'contas/boletos', component: MainBoletosComponent },
  { path: 'contas/boletos/editar', component: GerenciarBoletosComponent },
  { path: 'contas/impostos', component: MainImpostosComponent },
  { path: 'contas/impostos/editar', component: GerenciarImpostosComponent },
  { path: 'contas/outras', component: MainOutrasComponent },
  { path: 'contas/outras/editar', component: GerenciarOutrasComponent },
  { path: 'contas/migrar', component: MigrarContasComponent },
  { path: 'contas', component: TelaContaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
