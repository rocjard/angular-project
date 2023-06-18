import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

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
    AppRoutingModule,
    FormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
