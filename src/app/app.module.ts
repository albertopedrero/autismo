import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuPrincipalComponent } from './componentes/menu-principal/menu-principal.component';
import { PrincipalComponent } from './paginas/principal/principal.component';
import { EmocionesBasicasComponent } from './paginas/emociones-basicas/emociones-basicas.component';
import { ReconocimientoEmocionesComponent } from './paginas/reconocimiento-emociones/reconocimiento-emociones.component';
import { CasosRealesComponent } from './paginas/casos-reales/casos-reales.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularMaterialModule } from './angular-material/angular-material.module';
import { ModuloLoginModule } from './modulo-login/modulo-login.module';

import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    MenuPrincipalComponent,
    PrincipalComponent,
    EmocionesBasicasComponent,
    ReconocimientoEmocionesComponent,
    CasosRealesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModuloLoginModule,
    AngularMaterialModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
