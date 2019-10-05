import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { GerenciarBoletosComponent } from './pages/gerenciar-boletos/gerenciar-boletos.component';
import { TelaContaComponent } from './pages/tela-conta/tela-conta.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import {MatTreeModule, MatIconModule, MatButtonModule} from '@angular/material';
import { NavItemComponent } from './nav-item/nav-item.component';


@NgModule({
  declarations: [
    AppComponent,
    GerenciarBoletosComponent,
    TelaContaComponent,
    MainNavComponent,
    NavItemComponent
  ],
  imports: [
    BrowserModule,
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
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
