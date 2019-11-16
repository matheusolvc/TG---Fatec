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


const routes: Routes = [
	{ path: 'contas/boletos', component: MainBoletosComponent, canActivate: [AuthorizeGuard] },
	{ path: 'contas/boletos/editar', component: GerenciarBoletosComponent, canActivate: [AuthorizeGuard] },
	{ path: 'contas/impostos', component: MainImpostosComponent, canActivate: [AuthorizeGuard] },
	{ path: 'contas/impostos/editar', component: GerenciarImpostosComponent, canActivate: [AuthorizeGuard] },
	{ path: 'contas/outras', component: MainOutrasComponent, canActivate: [AuthorizeGuard] },
	{ path: 'contas/outras/editar', component: GerenciarOutrasComponent, canActivate: [AuthorizeGuard] },
	{ path: 'contas/migrar', component: MigrarContasComponent, canActivate: [AuthorizeGuard] },
	{ path: 'contas', component: TelaContaComponent, canActivate: [AuthorizeGuard] },
	//{ path: '', component: NavMenuComponent, canActivate: [AuthorizeGuard] }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
