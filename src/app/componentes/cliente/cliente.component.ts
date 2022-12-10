import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/Cliente';
import { ClienteService } from 'src/app/servicios/cliente.service';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService){  }

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe((clientes) => {
      this.clientes = clientes
      console.log(this.clientes[0].nombre);
    });
  }
}
