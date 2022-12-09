import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesService } from './clientes.service';
import { AltaClienteComponent } from './alta-cliente/alta-cliente.component';

import { FormsModule } from '@angular/forms';
import { ListadoClientesComponent } from './listado-clientes/listado-clientes.component';

// importo modulo del generador QR
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  declarations: [
    AltaClienteComponent,
    ListadoClientesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    QRCodeModule
  ],
  providers: [
    ClientesService
  ],
  exports: [
    AltaClienteComponent,
    ListadoClientesComponent
  ]
})
export class ClientesModule { }
