import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import { ProductosComponent } from './productos/productos.component';
import { CamaraComponent } from './camara/camara.component';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule]

@NgModule({
  declarations: [AppComponent, ListaAlumnosComponent, ProductosComponent, CamaraComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

defineCustomElements(window)
