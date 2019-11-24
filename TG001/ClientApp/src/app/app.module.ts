import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { GerenciarBoletosComponent } from './pages/boletos/gerenciar-boletos/gerenciar-boletos.component';
import { TelaContaComponent } from './pages/tela-conta/tela-conta.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatTreeModule, MatIconModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule, MatPaginatorModule, MAT_DATE_LOCALE } from '@angular/material';
import { NavItemComponent } from './nav-item/nav-item.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MainBoletosComponent } from './pages/boletos/main-boletos/main-boletos.component';
import { GerenciarImpostosComponent } from './pages/impostos/gerenciar-impostos/gerenciar-impostos.component';
import { MainImpostosComponent } from './pages/impostos/main-impostos/main-impostos.component';
import { MainOutrasComponent } from './pages/outras/main-outras/main-outras.component';
import { GerenciarOutrasComponent } from './pages/outras/gerenciar-outras/gerenciar-outras.component';
import { MigrarContasComponent } from './pages/migrar-contas/migrar-contas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ApiAuthorizationModule } from 'src/api-authorization/api-authorization.module';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';
import { MvcPartialDirective } from './main-nav/MvcPartialDirective';
import { MatTableModule } from '@angular/material/table';
import { TableContaComponent } from './table-conta/table-conta.component';
import { PagarContasComponent } from './pages/pagar-contas/pagar-contas.component';
import { MatRadioModule } from '@angular/material/radio';
import { TelaReembolsoComponent } from './pages/tela-reembolso/tela-reembolso.component';
import { AprovarReembolsoComponent } from './pages/aprovar-reembolso/aprovar-reembolso.component';
import { SolicitarReembolsoComponent } from './pages/solicitar-reembolso/solicitar-reembolso.component';
import { MinhasSolicitacoesComponent } from './pages/minhas-solicitacoes/minhas-solicitacoes.component';
import { BoletoService } from './services/boletos.service';
import { FornecedorService } from './services/fornecedor.service';
import { ContasMigracaoMigradasService } from './services/contas-migracao-migradas.service';
import { ContasMigracaoService } from './services/contas-migracao.service';
import { ImpostosService } from './services/imposto.service';
import { LoteService } from './services/lote.service';
import { OutrasContasService } from './services/outras-contas.service';
import { ReembolsoService } from './services/reembolso.service';
import { RenegociacoesService } from './services/renegociacoes.service';
import { RetornoLoteService } from './services/retorno-lote.service';

@NgModule({
	declarations: [
		AppComponent,
		NavMenuComponent,
		HomeComponent,
		CounterComponent,
		FetchDataComponent,
		GerenciarBoletosComponent,
		TelaContaComponent,
		MainNavComponent,
		NavItemComponent,
		MainBoletosComponent,
		GerenciarImpostosComponent,
		MainImpostosComponent,
		MainOutrasComponent,
		GerenciarOutrasComponent,
		MigrarContasComponent,
		MvcPartialDirective,
		TableContaComponent,
		PagarContasComponent,
		TelaReembolsoComponent,
		AprovarReembolsoComponent,
		SolicitarReembolsoComponent,
		MinhasSolicitacoesComponent
	],
	imports: [
		BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
		HttpClientModule,
		ApiAuthorizationModule,
		RouterModule.forRoot([
		]),
		AppRoutingModule,
		BrowserAnimationsModule,
		MatSidenavModule,
		MatButtonModule,
		LayoutModule,
		MatToolbarModule,
		MatIconModule,
		MatListModule,
		MatTreeModule,
		MatIconModule,
		MatButtonModule,
		MatCardModule,
		MatFormFieldModule,
		MatInputModule,
		MatMenuModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatTableModule,
		MatRadioModule,
		FormsModule,
		ReactiveFormsModule,
		MatPaginatorModule
	],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true },
		{ provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
		BoletoService,
		FornecedorService,
		ContasMigracaoMigradasService,
		ContasMigracaoService,
		ImpostosService,
		LoteService,
		OutrasContasService,
		ReembolsoService,
		RenegociacoesService,
		RetornoLoteService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
