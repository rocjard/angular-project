import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoDeServicoComponent } from './pedido-de-servico.component';

describe('PedidoDeServicoComponent', () => {
  let component: PedidoDeServicoComponent;
  let fixture: ComponentFixture<PedidoDeServicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PedidoDeServicoComponent]
    });
    fixture = TestBed.createComponent(PedidoDeServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
