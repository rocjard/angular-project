import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-formulario-pedido-de-servico',
  templateUrl: './formulario-pedido-de-servico.component.html',
  styleUrls: ['./formulario-pedido-de-servico.component.scss']
})
export class FormularioPedidoDeServicoComponent {


  // onSubimit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    console.log();
  }

}
