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
import { AuthorizeGuard } from '../api-authorization/authorize.guard';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { PagarContasComponent } from './pages/pagar-contas/pagar-contas.component';
import { TelaReembolsoComponent } from './pages/tela-reembolso/tela-reembolso.component';
import { MinhasSolicitacoesComponent } from './pages/minhas-solicitacoes/minhas-solicitacoes.component';
import { AprovarReembolsoComponent } from './pages/aprovar-reembolso/aprovar-reembolso.component';
import { SolicitarReembolsoComponent } from './pages/solicitar-reembolso/solicitar-reembolso.component';
import { ConsultaFornecedorComponent } from './pages/consultas/consulta-fornecedor/consulta-fornecedor.component';
import { ConsultaUsuarioComponent } from './pages/consultas/consulta-usuario/consulta-usuario.component';
import { TelaConsultaComponent } from './pages/tela-consulta/tela-consulta.component';


const routes: Routes = [
	{ path: 'contas/boletos', component: MainBoletosComponent, canActivate: [AuthorizeGuard] },
	{ path: 'contas/boletos/editar', component: GerenciarBoletosComponent, canActivate: [AuthorizeGuard] },
	{ path: 'contas/boletos/editar/:id', component: GerenciarBoletosComponent, canActivate: [AuthorizeGuard] },
	{ path: 'contas/impostos', component: MainImpostosComponent, canActivate: [AuthorizeGuard] },
	{ path: 'contas/impostos/editar', component: GerenciarImpostosComponent, canActivate: [AuthorizeGuard] },
	{ path: 'contas/impostos/editar/:id', component: GerenciarImpostosComponent, canActivate: [AuthorizeGuard] },
	{ path: 'contas/outras', component: MainOutrasComponent, canActivate: [AuthorizeGuard] },
	{ path: 'contas/outras/editar', component: GerenciarOutrasComponent, canActivate: [AuthorizeGuard] },
	{ path: 'contas/outras/editar/:id', component: GerenciarOutrasComponent, canActivate: [AuthorizeGuard] },
	{ path: 'contas/migrar', component: MigrarContasComponent, canActivate: [AuthorizeGuard] },
	{ path: 'contas', component: TelaContaComponent, canActivate: [AuthorizeGuard] },
	{ path: 'reembolsos', component: TelaReembolsoComponent, canActivate: [AuthorizeGuard] },
	{ path: 'reembolsos/solicitacoes', component: MinhasSolicitacoesComponent, canActivate: [AuthorizeGuard] },
	{ path: 'reembolsos/aprovar', component: AprovarReembolsoComponent, canActivate: [AuthorizeGuard] },
	{ path: 'reembolsos/solicitar', component: SolicitarReembolsoComponent, canActivate: [AuthorizeGuard] },
	{ path: 'pagar-contas', component: PagarContasComponent, canActivate: [AuthorizeGuard] },
	//{ path: '', redirectTo: 'authentication/login?returnurl=/contas', pathMatch: 'full' },
	//{ path: 'logout', redirectTo: 'authentication/logout', pathMatch: 'full' },
	//{ path: 'consultas', component: ConsultasComponent, canActivate: [AuthorizeGuard] },
	{ path: 'consulta', component: TelaConsultaComponent, canActivate: [AuthorizeGuard] },
	{ path: 'consulta/fornecedor', component: ConsultaFornecedorComponent, canActivate: [AuthorizeGuard] },
	{ path: 'consulta/usuarios', component: ConsultaUsuarioComponent, canActivate: [AuthorizeGuard] }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
