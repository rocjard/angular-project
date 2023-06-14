import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PedidoDeServicoComponent } from './pedido-de-servico/pedido-de-servico.component';
import { FormularioPedidoDeServicoComponent } from './formulario-pedido-de-servico/formulario-pedido-de-servico.component';

@NgModule({
  declarations: [
    AppComponent,
    PedidoDeServicoComponent,
    FormularioPedidoDeServicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
