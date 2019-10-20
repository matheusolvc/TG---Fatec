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
import { MatTreeModule, MatIconModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
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
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    GerenciarBoletosComponent,
    TelaContaComponent,
    MainNavComponent,
    NavItemComponent,
    MainBoletosComponent,
    GerenciarImpostosComponent,
    MainImpostosComponent,
    MainOutrasComponent,
    GerenciarOutrasComponent,
    MigrarContasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
