import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPedidoDeServicoComponent } from './formulario-pedido-de-servico.component';

describe('FormularioPedidoDeServicoComponent', () => {
  let component: FormularioPedidoDeServicoComponent;
  let fixture: ComponentFixture<FormularioPedidoDeServicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioPedidoDeServicoComponent]
    });
    fixture = TestBed.createComponent(FormularioPedidoDeServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
